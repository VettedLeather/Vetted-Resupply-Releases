const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const { exec, spawn, spawnSync } = require("child_process");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_VERSION = process.env.SHOPIFY_API_VERSION || "2026-07";
const SCOPES = process.env.SHOPIFY_SCOPES || "read_orders";
const REDIRECT_URI = process.env.SHOPIFY_REDIRECT_URI || `http://localhost:${PORT}/api/shopify/oauth/callback`;
const SESSION_FILE = path.join(__dirname, ".shopify-session.json");
const DATA_DIR = path.join(path.dirname(__dirname), "Data");
const DATA_FILE = path.join(DATA_DIR, "vetted-resupply-data.json");
const BACKUP_DIR = path.join(DATA_DIR, "Backups");
const MAX_BACKUPS = 40;
const IS_ELECTRON_DESKTOP = !!process.versions.electron || process.env.VR_DESKTOP_SHELL === "1";

function electronApi() {
  if (!IS_ELECTRON_DESKTOP) return null;
  try { return require("electron"); } catch (_) { return null; }
}

const SYNC_CONFIG_FILE = path.join(DATA_DIR, "shared-workspace.json");
const CLOUD_ACCOUNT_FILE = path.join(DATA_DIR, "cloud-account.json");
const CLOUD_SERVICE_FILE = path.join(__dirname, "CLOUD_SERVICE.json");
const UPDATE_CONFIG_FILE = path.join(DATA_DIR, "update-channel.json");
const CURRENT_VERSION = (()=>{try{return fs.readFileSync(path.join(__dirname,"VERSION.txt"),"utf8").trim()||"0.0.0"}catch(_){return "0.0.0"}})();
let updateState = { status:"idle", currentVersion:CURRENT_VERSION, latestVersion:null, readyZip:null, lastCheckedAt:null, error:null };

function semverParts(v){return String(v||"0").replace(/^v/i,"").split(".").map(x=>parseInt(x,10)||0).slice(0,3).concat([0,0,0]).slice(0,3)}
function newerVersion(a,b){const A=semverParts(a),B=semverParts(b);for(let i=0;i<3;i++){if(A[i]>B[i])return true;if(A[i]<B[i])return false}return false}
function normalizeGithubRepo(value){
  let v=String(value||"").trim().replace(/^https?:\/\/github\.com\//i,"").replace(/\.git$/i,"").replace(/^\/+|\/+$/g,"");
  const parts=v.split("/").filter(Boolean);
  return parts.length>=2?`${parts[0]}/${parts[1]}`:"";
}
function loadUpdateConfig(){
  try{
    const raw=JSON.parse(fs.readFileSync(UPDATE_CONFIG_FILE,"utf8"));
    return {githubRepo:normalizeGithubRepo(raw.githubRepo||""),manifestUrl:String(raw.manifestUrl||"").trim(),autoDownload:raw.autoDownload!==false};
  }catch(_){
    return {githubRepo:normalizeGithubRepo(process.env.VR_UPDATE_GITHUB_REPO||""),manifestUrl:String(process.env.VR_UPDATE_MANIFEST_URL||"").trim(),autoDownload:true};
  }
}
function saveUpdateConfig(next){
  fs.mkdirSync(DATA_DIR,{recursive:true});
  const cur=loadUpdateConfig();
  const cfg={...cur,...next};
  cfg.githubRepo=normalizeGithubRepo(cfg.githubRepo||"");
  cfg.manifestUrl=String(cfg.manifestUrl||"").trim();
  cfg.autoDownload=cfg.autoDownload!==false;
  const temp=UPDATE_CONFIG_FILE+".tmp";
  fs.writeFileSync(temp,JSON.stringify(cfg,null,2),"utf8");
  fs.renameSync(temp,UPDATE_CONFIG_FILE);
  return cfg;
}
async function resolveRelease(cfg){
  const repo=normalizeGithubRepo(cfg.githubRepo||process.env.VR_UPDATE_GITHUB_REPO||"");
  if(repo){
    const r=await fetch(`https://api.github.com/repos/${repo}/releases/latest`,{headers:{"User-Agent":"Vetted-Resupply/"+CURRENT_VERSION,"Accept":"application/vnd.github+json"}});
    if(!r.ok) throw new Error(`GitHub release check HTTP ${r.status}`);
    const rel=await r.json();
    const latest=String(rel.tag_name||rel.name||"").trim().replace(/^v/i,"");
    if(!latest) throw new Error("Latest GitHub release has no version tag.");
    const assets=Array.isArray(rel.assets)?rel.assets:[];
    const asset=assets.find(a=>/^Vetted_Resupply_Update_.*\.zip$/i.test(String(a.name||"")))||assets.find(a=>/\.zip$/i.test(String(a.name||"")));
    if(!asset?.browser_download_url) throw new Error("Latest GitHub release does not contain a Vetted Resupply update ZIP.");
    return {version:latest,item:{url:String(asset.browser_download_url),sha256:""}};
  }
  const manifestUrl=String(cfg.manifestUrl||process.env.VR_UPDATE_MANIFEST_URL||"").trim();
  if(!manifestUrl)return null;
  const r=await fetch(manifestUrl,{headers:{"User-Agent":"Vetted-Resupply/"+CURRENT_VERSION}});
  if(!r.ok) throw new Error(`Release feed HTTP ${r.status}`);
  const m=await r.json();
  const latest=String(m.version||"").trim();
  if(!latest) throw new Error("Release feed is missing version.");
  const platformKey=process.platform==="win32"?"windows":process.platform==="darwin"?"mac":"linux";
  const item=m[platformKey]||m.package||{};
  return {version:latest,item};
}
async function checkForRelease(){
  const cfg=loadUpdateConfig();
  const configured=!!(normalizeGithubRepo(cfg.githubRepo||process.env.VR_UPDATE_GITHUB_REPO||"")||String(cfg.manifestUrl||process.env.VR_UPDATE_MANIFEST_URL||"").trim());
  if(!configured){ updateState={...updateState,status:"unconfigured",lastCheckedAt:new Date().toISOString(),error:null}; return updateState; }
  updateState={...updateState,status:"checking",error:null};
  try{
    const release=await resolveRelease(cfg);
    if(!release){updateState.status="unconfigured";return updateState;}
    const latest=String(release.version||"").trim();
    const item=release.item||{};
    updateState={...updateState,latestVersion:latest,lastCheckedAt:new Date().toISOString()};
    if(!newerVersion(latest,CURRENT_VERSION)){ updateState.status="up-to-date"; return updateState; }
    const url=String(item.url||"").trim();
    if(!url) throw new Error(`Release ${latest} has no update package URL.`);
    updateState.status="available";
    if(cfg.autoDownload===false) return updateState;
    fs.mkdirSync(path.join(path.dirname(__dirname),"Updates"),{recursive:true});
    const out=path.join(path.dirname(__dirname),"Updates",`Vetted_Resupply_Update_${latest.replace(/[^0-9A-Za-z._-]/g,"_")}_auto.zip`);
    const rr=await fetch(url,{headers:{"User-Agent":"Vetted-Resupply/"+CURRENT_VERSION}}); if(!rr.ok) throw new Error(`Update download HTTP ${rr.status}`);
    const buf=Buffer.from(await rr.arrayBuffer());
    if(item.sha256){ const got=crypto.createHash("sha256").update(buf).digest("hex"); if(got.toLowerCase()!==String(item.sha256).toLowerCase()) throw new Error("Update verification failed."); }
    fs.writeFileSync(out,buf);
    updateState.status="ready"; updateState.readyZip=out;
    return updateState;
  }catch(e){ updateState={...updateState,status:"error",error:String(e.message||e),lastCheckedAt:new Date().toISOString()}; return updateState; }
}

function loadSyncConfig() {
  try {
    const cfg = JSON.parse(fs.readFileSync(SYNC_CONFIG_FILE, "utf8"));
    return {
      enabled: !!cfg.enabled,
      projectUrl: String(cfg.projectUrl || "").replace(/\/$/, ""),
      anonKey: String(cfg.anonKey || ""),
      workspaceId: String(cfg.workspaceId || ""),
      syncSecret: String(cfg.syncSecret || ""),
      deviceId: String(cfg.deviceId || crypto.randomUUID()),
      lastRevision: Number(cfg.lastRevision || 0),
      lastSyncAt: cfg.lastSyncAt || null
    };
  } catch (_) {
    return { enabled:false, projectUrl:"", anonKey:"", workspaceId:"", syncSecret:"", deviceId:crypto.randomUUID(), lastRevision:0, lastSyncAt:null };
  }
}

function saveSyncConfig(next) {
  fs.mkdirSync(DATA_DIR, { recursive:true });
  const current = loadSyncConfig();
  const cfg = { ...current, ...next, deviceId: next?.deviceId || current.deviceId || crypto.randomUUID() };
  const temp = SYNC_CONFIG_FILE + ".tmp";
  fs.writeFileSync(temp, JSON.stringify(cfg, null, 2), "utf8");
  fs.renameSync(temp, SYNC_CONFIG_FILE);
  return cfg;
}

function publicSyncConfig(cfg = loadSyncConfig()) {
  return {
    enabled: !!cfg.enabled,
    configured: !!(cfg.projectUrl && cfg.anonKey && cfg.workspaceId && cfg.syncSecret),
    projectUrl: cfg.projectUrl || "",
    anonKey: cfg.anonKey || "",
    workspaceId: cfg.workspaceId || "",
    syncSecret: cfg.syncSecret || "",
    deviceId: cfg.deviceId || "",
    lastRevision: Number(cfg.lastRevision || 0),
    lastSyncAt: cfg.lastSyncAt || null
  };
}

async function syncRpc(functionName, body, cfg = loadSyncConfig()) {
  if (!(cfg.projectUrl && cfg.anonKey)) throw new Error("Shared workspace is not configured.");
  const r = await fetch(`${cfg.projectUrl}/rest/v1/rpc/${functionName}`, {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "apikey":cfg.anonKey,
      "Authorization":`Bearer ${cfg.anonKey}`
    },
    body:JSON.stringify(body || {})
  });
  const text = await r.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch (_) { data = text; }
  if (!r.ok) {
    const msg = data?.message || data?.error || data?.hint || text || `HTTP ${r.status}`;
    throw new Error(msg);
  }
  return data;
}


function loadCloudServiceConfig() {
  let file = {};
  try { file = JSON.parse(fs.readFileSync(CLOUD_SERVICE_FILE, "utf8")); } catch (_) {}
  const legacy = loadSyncConfig();
  return {
    projectUrl: String(process.env.VR_CLOUD_PROJECT_URL || file.projectUrl || legacy.projectUrl || "").trim().replace(/\/$/, ""),
    anonKey: String(process.env.VR_CLOUD_ANON_KEY || file.anonKey || legacy.anonKey || "").trim()
  };
}
function loadCloudAccount() {
  try {
    const a=JSON.parse(fs.readFileSync(CLOUD_ACCOUNT_FILE,"utf8"));
    return {
      accessToken:String(a.accessToken||""), refreshToken:String(a.refreshToken||""), expiresAt:Number(a.expiresAt||0),
      email:String(a.email||""), businessId:String(a.businessId||""), businessName:String(a.businessName||""),
      lastRevision:Number(a.lastRevision||0), lastSyncAt:a.lastSyncAt||null, deviceId:String(a.deviceId||crypto.randomUUID())
    };
  } catch (_) { return {accessToken:"",refreshToken:"",expiresAt:0,email:"",businessId:"",businessName:"",lastRevision:0,lastSyncAt:null,deviceId:crypto.randomUUID()}; }
}
function saveCloudAccount(next) {
  fs.mkdirSync(DATA_DIR,{recursive:true});
  const cur=loadCloudAccount(); const out={...cur,...next,deviceId:next?.deviceId||cur.deviceId||crypto.randomUUID()};
  const tmp=CLOUD_ACCOUNT_FILE+".tmp"; fs.writeFileSync(tmp,JSON.stringify(out,null,2),"utf8"); fs.renameSync(tmp,CLOUD_ACCOUNT_FILE); return out;
}
function publicCloudStatus() {
  const svc=loadCloudServiceConfig(), a=loadCloudAccount(), legacy=loadSyncConfig();
  return {serviceConfigured:!!(svc.projectUrl&&svc.anonKey),signedIn:!!(a.accessToken||a.refreshToken),email:a.email||"",businessId:a.businessId||"",businessName:a.businessName||"",lastRevision:a.lastRevision||0,lastSyncAt:a.lastSyncAt||null,legacyAvailable:!!(legacy.projectUrl&&legacy.anonKey&&legacy.workspaceId&&legacy.syncSecret)};
}
async function cloudAuthRequest(pathname, body) {
  const svc=loadCloudServiceConfig(); if(!(svc.projectUrl&&svc.anonKey)) throw new Error("Vetted Resupply Cloud service is not configured on this installation yet.");
  const r=await fetch(`${svc.projectUrl}/auth/v1/${pathname}`,{method:"POST",headers:{"Content-Type":"application/json","apikey":svc.anonKey},body:JSON.stringify(body||{})});
  const text=await r.text(); let data=null; try{data=text?JSON.parse(text):null}catch(_){data=text}
  if(!r.ok) throw new Error(data?.msg||data?.message||data?.error_description||data?.error||text||`HTTP ${r.status}`); return data;
}
async function ensureCloudAccessToken() {
  let a=loadCloudAccount(); if(a.accessToken && a.expiresAt>Date.now()+60000) return a;
  if(!a.refreshToken) throw new Error("Sign in to Vetted Resupply Cloud first.");
  const data=await cloudAuthRequest("token?grant_type=refresh_token",{refresh_token:a.refreshToken});
  const expiresAt=Date.now()+Number(data.expires_in||3600)*1000;
  a=saveCloudAccount({accessToken:data.access_token||"",refreshToken:data.refresh_token||a.refreshToken,expiresAt,email:data.user?.email||a.email}); return a;
}
async function cloudRpc(functionName, body) {
  const svc=loadCloudServiceConfig(); const a=await ensureCloudAccessToken();
  const r=await fetch(`${svc.projectUrl}/rest/v1/rpc/${functionName}`,{method:"POST",headers:{"Content-Type":"application/json","apikey":svc.anonKey,"Authorization":`Bearer ${a.accessToken}`},body:JSON.stringify(body||{})});
  const text=await r.text(); let data=null; try{data=text?JSON.parse(text):null}catch(_){data=text}
  if(!r.ok) throw new Error(data?.message||data?.error||data?.hint||text||`HTTP ${r.status}`); return data;
}

function backupStamp(d = new Date()) { return d.toISOString().replace(/[:.]/g, "-"); }
function listDataBackups() {
  try {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    return fs.readdirSync(BACKUP_DIR).filter(n => /^vetted-resupply-.*\.json$/.test(n)).sort().reverse();
  } catch (_) { return []; }
}
function pruneDataBackups() {
  for (const n of listDataBackups().slice(MAX_BACKUPS)) { try { fs.unlinkSync(path.join(BACKUP_DIR, n)); } catch (_) {} }
}
function createDataSnapshot(label = "auto") {
  try {
    if (!fs.existsSync(DATA_FILE)) return null;
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    const safe = String(label || "auto").replace(/[^a-z0-9_-]/gi, "-").slice(0, 24);
    const name = `vetted-resupply-${backupStamp()}-${safe}.json`;
    fs.copyFileSync(DATA_FILE, path.join(BACKUP_DIR, name));
    pruneDataBackups();
    return name;
  } catch (_) { return null; }
}
// Every app launch creates a restore point before the new version can write user data.
createDataSnapshot("startup");

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

function cleanShopDomain(value) {
  let shop = String(value || "")
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\/.*$/, "")
    .replace(/\.+$/, "");
  if (shop && !shop.includes(".")) shop += ".myshopify.com";
  return shop.toLowerCase();
}

function isValidShopDomain(shop) {
  return /^[a-z0-9][a-z0-9-]*\.myshopify\.com$/i.test(String(shop || ""));
}

function config() {
  const clientId = String(process.env.SHOPIFY_CLIENT_ID || "").trim();
  const clientSecret = String(process.env.SHOPIFY_CLIENT_SECRET || "").trim();
  const defaultShop = cleanShopDomain(process.env.SHOPIFY_SHOP);
  if (!clientId) throw new Error("SHOPIFY_CLIENT_ID is missing from .env");
  if (!clientSecret) throw new Error("SHOPIFY_CLIENT_SECRET is missing from .env");
  return { clientId, clientSecret, defaultShop };
}

function loadSession() {
  try {
    const data = JSON.parse(fs.readFileSync(SESSION_FILE, "utf8"));
    if (!data?.shop || !data?.accessToken) return null;
    return data;
  } catch (_) {
    return null;
  }
}

function saveSession(session) {
  fs.writeFileSync(SESSION_FILE, JSON.stringify(session, null, 2), { mode: 0o600 });
  try { fs.chmodSync(SESSION_FILE, 0o600); } catch (_) {}
}

function clearSession() {
  try { fs.unlinkSync(SESSION_FILE); } catch (_) {}
}

const oauthStates = new Map();
function purgeStates() {
  const cutoff = Date.now() - 10 * 60 * 1000;
  for (const [state, createdAt] of oauthStates.entries()) if (createdAt < cutoff) oauthStates.delete(state);
}

function verifyHmac(query, secret) {
  const hmac = String(query.hmac || "");
  if (!/^[a-f0-9]{64}$/i.test(hmac)) return false;
  const params = Object.fromEntries(Object.entries(query).filter(([key]) => key !== "hmac"));
  const message = Object.entries(params).sort().map(([k, v]) => `${k}=${v}`).join("&");
  const digest = crypto.createHmac("sha256", secret).update(message).digest("hex");
  const a = Buffer.from(digest, "utf8");
  const b = Buffer.from(hmac, "utf8");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function createShopifyAuthUrl(requestedShop) {
  purgeStates();
  const { clientId, defaultShop } = config();
  const shop = cleanShopDomain(requestedShop || defaultShop);
  if (!isValidShopDomain(shop)) throw new Error("Enter a valid .myshopify.com store domain.");
  const state = crypto.randomBytes(24).toString("hex");
  oauthStates.set(state, Date.now());
  const authUrl = `https://${shop}/admin/oauth/authorize?` + new URLSearchParams({
    client_id: clientId,
    scope: SCOPES,
    redirect_uri: REDIRECT_URI,
    state,
  });
  return { shop, authUrl };
}

// Desktop-safe OAuth starter. The UI requests the URL first, then opens Shopify
// in the user's normal browser. This keeps Electron's main window on the app
// instead of briefly navigating through a 302 redirect (which could leave a
// blank/dark window on macOS).
app.get("/api/shopify/connect-url", (req, res) => {
  try {
    const result = createShopifyAuthUrl(req.query.shop);
    res.setHeader("Cache-Control", "no-store");
    res.json({ ok: true, shop: result.shop, url: result.authUrl });
  } catch (e) {
    res.status(500).json({ ok: false, error: `Could not start Shopify connection: ${e.message}` });
  }
});

// Kept for backwards compatibility with older front-ends/bookmarks.
app.get("/api/shopify/connect", (req, res) => {
  try {
    const result = createShopifyAuthUrl(req.query.shop);
    res.redirect(result.authUrl);
  } catch (e) {
    res.status(500).send(`Could not start Shopify connection: ${e.message}`);
  }
});

app.get("/api/shopify/oauth/callback", async (req, res) => {
  try {
    const { code, hmac, shop, state } = req.query;
    const { clientId, clientSecret } = config();
    purgeStates();
    if (!state || !oauthStates.has(String(state))) return res.status(403).send("Invalid or expired OAuth state. Return to Vetted Resupply and connect again.");
    oauthStates.delete(String(state));
    if (!isValidShopDomain(shop)) return res.status(400).send("Invalid Shopify store domain returned by Shopify.");
    if (!verifyHmac(req.query, clientSecret)) return res.status(403).send("Shopify callback HMAC validation failed.");
    if (!code) return res.status(400).send("Shopify did not return an authorization code.");

    const tokenResponse = await fetch(`https://${shop}/admin/oauth/access_token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
      body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, code: String(code) }),
    });
    let tokenJson = {};
    try { tokenJson = await tokenResponse.json(); } catch (_) {}
    if (!tokenResponse.ok || !tokenJson.access_token) {
      const detail = tokenJson.error_description || tokenJson.error || tokenJson.message || `HTTP ${tokenResponse.status}`;
      throw new Error(`Shopify token exchange failed: ${detail}`);
    }

    saveSession({
      shop: cleanShopDomain(shop),
      accessToken: tokenJson.access_token,
      scope: String(tokenJson.scope || SCOPES),
      connectedAt: new Date().toISOString(),
    });

    if (IS_ELECTRON_DESKTOP) {
      res.status(200).send(`<!doctype html><html><head><meta charset="utf-8"><title>Vetted Resupply — Shopify Connected</title><style>body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:#160607;color:#fff;display:grid;place-items:center;min-height:100vh;margin:0}main{max-width:560px;padding:32px;background:#050505;border:1px solid #333;border-radius:12px;text-align:center}h1{margin-top:0}p{color:#ccc;line-height:1.5}</style></head><body><main><h1>Shopify connected</h1><p>Shopify approved Vetted Resupply for <b>${cleanShopDomain(shop)}</b>.</p><p>You can close this browser tab and return to Vetted Resupply. The app will detect the connection automatically.</p></main></body></html>`);
    } else {
      res.redirect("/?shopify_connected=1");
    }
  } catch (e) {
    res.status(500).send(`Shopify connection failed: ${e.message}`);
  }
});

app.post("/api/shopify/disconnect", (req, res) => {
  clearSession();
  res.json({ ok: true });
});

async function shopifyGraphQL(query, variables = {}) {
  const session = loadSession();
  if (!session) {
    const err = new Error("Shopify is not authorized yet. Click Connect Shopify first.");
    err.code = "NOT_CONNECTED";
    throw err;
  }
  const response = await fetch(`https://${session.shop}/admin/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": session.accessToken,
    },
    body: JSON.stringify({ query, variables }),
  });
  let json = {};
  try { json = await response.json(); } catch (_) {}
  if (response.status === 401) {
    clearSession();
    const err = new Error("Shopify authorization expired or was revoked. Click Connect Shopify again.");
    err.code = "NOT_CONNECTED";
    throw err;
  }
  if (!response.ok) throw new Error(json?.errors?.[0]?.message || json?.error || `Shopify HTTP ${response.status}`);
  if (json.errors?.length) throw new Error(json.errors.map((x) => x.message).join("; "));
  return { shop: session.shop, data: json.data, session };
}

app.get("/api/shopify/status", async (req, res) => {
  const session = loadSession();
  if (!session) return res.json({ ok: true, connected: false, apiVersion: API_VERSION, redirectUri: REDIRECT_URI });
  try {
    const result = await shopifyGraphQL(`query { shop { name myshopifyDomain } }`);
    res.json({
      ok: true,
      connected: true,
      shop: result.data.shop.myshopifyDomain,
      name: result.data.shop.name,
      apiVersion: API_VERSION,
      scope: result.session.scope,
      connectedAt: result.session.connectedAt,
    });
  } catch (e) {
    if (e.code === "NOT_CONNECTED") return res.json({ ok: true, connected: false, error: e.message, apiVersion: API_VERSION, redirectUri: REDIRECT_URI });
    res.status(500).json({ ok: false, connected: false, error: e.message });
  }
});

app.get("/api/shopify/orders", async (req, res) => {
  try {
    const result = await shopifyGraphQL(`
      query RecentPaidOrders {
        orders(first: 50, sortKey: CREATED_AT, reverse: true, query: "financial_status:paid") {
          nodes {
            id
            name
            createdAt
            displayFinancialStatus
            lineItems(first: 100) {
              nodes {
                id
                title
                quantity
                currentQuantity
                customAttributes { key value }
              }
            }
          }
        }
      }
    `);
    const orders = (result.data.orders.nodes || []).map((o) => ({
      id: o.id,
      name: o.name,
      createdAt: o.createdAt,
      financialStatus: o.displayFinancialStatus,
      lineItems: (o.lineItems?.nodes || []).map((li) => ({
        id: li.id,
        title: li.title,
        quantity: li.quantity,
        currentQuantity: li.currentQuantity,
        customAttributes: li.customAttributes || [],
      })),
    }));
    res.json({ ok: true, shop: result.shop, orders });
  } catch (e) {
    const status = e.code === "NOT_CONNECTED" ? 401 : 500;
    res.status(status).json({ ok: false, error: e.message });
  }
});



function psSingleQuote(value) {
  return String(value || "").replace(/'/g, "''");
}

function resolveElectronLauncher() {
  const candidates = process.platform === "win32"
    ? [
        path.join(__dirname, "node_modules", "electron", "dist", "electron.exe"),
        path.join(__dirname, "node_modules", ".bin", "electron.cmd"),
        path.join(__dirname, "node_modules", ".bin", "electron.exe")
      ]
    : [path.join(__dirname, "node_modules", ".bin", "electron")];
  for (const candidate of candidates) {
    try { if (fs.existsSync(candidate)) return candidate; } catch (_) {}
  }
  return null;
}

function repairElectronRuntime() {
  if (process.platform !== "win32") return false;
  try {
    const installJs = path.join(__dirname, "node_modules", "electron", "install.js");
    if (!fs.existsSync(installJs)) return false;
    const r = spawnSync(process.execPath, [installJs], {
      cwd: __dirname,
      windowsHide: true,
      encoding: "utf8",
      env: { ...process.env, ELECTRON_RUN_AS_NODE: "1" }
    });
    return r.status === 0 && !!resolveElectronLauncher();
  } catch (_) { return false; }
}

function launchElectronDetached() {
  let launcher = resolveElectronLauncher();
  if (!launcher) {
    repairElectronRuntime();
    launcher = resolveElectronLauncher();
  }
  if (!launcher) return false;
  try {
    if (process.platform === "win32" && launcher.toLowerCase().endsWith(".cmd")) {
      const child = spawn(process.env.ComSpec || "cmd.exe", ["/d", "/s", "/c", `"${launcher}" "${__dirname}"`], {
        detached: true, windowsHide: true, stdio: "ignore", cwd: __dirname
      });
      child.unref();
    } else {
      const child = spawn(launcher, [__dirname], { detached: true, windowsHide: true, stdio: "ignore", cwd: __dirname });
      child.unref();
    }
    return true;
  } catch (_) { return false; }
}

function ensureWindowsHiddenLauncher() {
  if (process.platform !== "win32") return;
  try {
    const appDir = __dirname;
    const rootDir = path.dirname(appDir);
    const iconPath = path.join(appDir, "public", "assets", "vetted-resupply-icon.ico");
    let electronExe = resolveElectronLauncher();
    if (!electronExe && repairElectronRuntime()) electronExe = resolveElectronLauncher();
    const useDesktopShell = !!electronExe;

    if (useDesktopShell) {
      // V2.13.4: permanently replace the legacy Edge launcher with the Electron desktop launcher.
      // The root BAT is intentionally rewritten here because the update ZIP itself is installed
      // into the App folder. This makes one launch through the old BAT self-repair the install.
      const rootBat = path.join(rootDir, "Start Vetted Resupply.bat");
      const rootCmd = path.join(rootDir, "Start Vetted Resupply.cmd");
      const isCmdLauncher = electronExe.toLowerCase().endsWith(".cmd");
      const launchLine = isCmdLauncher
        ? `start "" /b cmd.exe /d /s /c "\"${electronExe}\" \"${appDir}\""`
        : `start "" "${electronExe}" "${appDir}"`;
      const launcherBat = [
        "@echo off",
        "setlocal",
        `cd /d "${appDir}"`,
        launchLine,
        "exit /b 0"
      ].join("\r\n") + "\r\n";
      try { fs.writeFileSync(rootBat, launcherBat, "utf8"); } catch (_) {}
      try { fs.writeFileSync(rootCmd, launcherBat, "utf8"); } catch (_) {}
      try { fs.unlinkSync(path.join(rootDir, "Start Vetted Resupply.vbs")); } catch (_) {}

      // Resolve Windows' actual Desktop path through the shell instead of assuming
      // C:\\Users\\<name>\\Desktop. This also works when Desktop is redirected to
      // OneDrive or another known-folder location.
      const rootShortcut = path.join(rootDir, "Vetted Resupply.lnk");
      const ps = [
        "$ErrorActionPreference='Stop'",
        "$ws=New-Object -ComObject WScript.Shell",
        "$desktop=[Environment]::GetFolderPath('Desktop')",
        "$programs=[Environment]::GetFolderPath('Programs')",
        `$targets=@((Join-Path $desktop 'Vetted Resupply.lnk'),(Join-Path $programs 'Vetted Resupply.lnk'),'${psSingleQuote(rootShortcut)}')`,
        "foreach($shortcut in $targets){",
        "  if([string]::IsNullOrWhiteSpace($shortcut)){continue}",
        "  $dir=Split-Path -Parent $shortcut",
        "  if($dir){New-Item -ItemType Directory -Path $dir -Force | Out-Null}",
        "  if(Test-Path $shortcut){Remove-Item $shortcut -Force}",
        "  $s=$ws.CreateShortcut($shortcut)",
        ...(electronExe.toLowerCase().endsWith(".cmd")
          ? [
              `  $s.TargetPath='${psSingleQuote(process.env.ComSpec || "C:\\Windows\\System32\\cmd.exe")}'`,
              `  $s.Arguments='/d /s /c "\"${psSingleQuote(electronExe)}\" \"${psSingleQuote(appDir)}\""'`
            ]
          : [
              `  $s.TargetPath='${psSingleQuote(electronExe)}'`,
              `  $s.Arguments='"${psSingleQuote(appDir)}"'`
            ]),
        `  $s.WorkingDirectory='${psSingleQuote(appDir)}'`,
        "  $s.Description='Vetted Resupply'",
        ...(fs.existsSync(iconPath) ? [`  $s.IconLocation='${psSingleQuote(iconPath)},0'`] : []),
        "  $s.Save()",
        "}"
      ].join(';');
      const r = spawnSync("powershell.exe", ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-Command", ps], {
        windowsHide: true,
        encoding: "utf8"
      });
      if (r.status !== 0) {
        console.log("Desktop/Start Menu shortcuts could not be refreshed automatically:", (r.stderr || r.stdout || "unknown error").trim());
      }

      // Stamp the same explicit Windows AppUserModelID onto the shortcuts that
      // Electron uses at runtime. This is what lets a pinned VR shortcut launch
      // the app with its arguments and group the running window under that same pin.
      const repairScript = path.join(appDir, "repair-shortcuts.ps1");
      if (fs.existsSync(repairScript)) {
        const sr = spawnSync("powershell.exe", ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-File", repairScript], {
          windowsHide: true,
          encoding: "utf8"
        });
        if (sr.status !== 0) {
          console.log("Vetted Resupply shortcut identity could not be stamped automatically:", (sr.stderr || sr.stdout || "unknown error").trim());
        }
      }
      return;
    }

    // Legacy fallback for installs where the Electron runtime is not present yet.
    const launcherPath = path.join(rootDir, "Start Vetted Resupply.vbs");
    const nodeExe = process.execPath;
    const serverPath = path.join(appDir, "server.js");
    const windowsDir = process.env.WINDIR || "C:\\Windows";
    const wscriptExe = path.join(windowsDir, "System32", "wscript.exe");
    const appUrl = `http://localhost:${PORT}`;
    const vbs = [
      'Set shell = CreateObject("WScript.Shell")',
      'Set http = CreateObject("WinHttp.WinHttpRequest.5.1")',
      'serverRunning = False',
      'On Error Resume Next',
      `http.Open "GET", "${appUrl}", False`,
      'http.SetTimeouts 300, 300, 300, 300',
      'http.Send',
      'If Err.Number = 0 Then',
      '  If http.Status >= 200 And http.Status < 500 Then serverRunning = True',
      'End If',
      'Err.Clear',
      'On Error GoTo 0',
      `If serverRunning Then`,
      `  shell.Run Chr(34) & "msedge.exe" & Chr(34) & " --app=${appUrl}", 1, False`,
      'Else',
      `  shell.CurrentDirectory = "${appDir.replace(/\\/g, "\\\\")}"`,
      `  shell.Run Chr(34) & "${nodeExe.replace(/\\/g, "\\\\")}" & Chr(34) & " " & Chr(34) & "${serverPath.replace(/\\/g, "\\\\")}" & Chr(34), 0, False`,
      'End If'
    ].join("\r\n");
    fs.writeFileSync(launcherPath, vbs, "utf8");
    const ps = [
      "$desktop=[Environment]::GetFolderPath('Desktop')",
      "$shortcut=(Join-Path $desktop 'Vetted Resupply.lnk')",
      "if(Test-Path $shortcut){Remove-Item $shortcut -Force}",
      "$ws=New-Object -ComObject WScript.Shell",
      "$s=$ws.CreateShortcut($shortcut)",
      `$s.TargetPath='${psSingleQuote(wscriptExe)}'`,
      `$s.Arguments='"${psSingleQuote(launcherPath)}"'`,
      `$s.WorkingDirectory='${psSingleQuote(appDir)}'`,
      "$s.Description='Start Vetted Resupply'",
      ...(fs.existsSync(iconPath) ? [`$s.IconLocation='${psSingleQuote(iconPath)},0'`] : []),
      "$s.Save()"
    ].join(';');
    spawnSync("powershell.exe", ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-Command", ps], {
      windowsHide: true,
      stdio: "ignore"
    });
  } catch (e) {
    console.log("Could not create Vetted Resupply shortcuts:", e.message);
  }
}

function openBrowser(url) {
  if (process.env.AUTO_OPEN_BROWSER === "0" || IS_ELECTRON_DESKTOP) return;
  try {
    if (launchElectronDetached()) return;
    if (process.platform === "win32") {
      // Never fall back to the old Edge app-mode launcher. If Electron is missing,
      // show a clear repair message instead so Windows cannot silently return to the
      // duplicate taskbar / Edge-hosted behavior that V2.13.x is replacing.
      const msg = "Vetted Resupply could not start the desktop runtime. Electron is installed, but its launcher could not be resolved or repaired.";
      spawnSync("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", `Add-Type -AssemblyName PresentationFramework; [System.Windows.MessageBox]::Show('${msg.replace(/'/g, "''")}','Vetted Resupply') | Out-Null`], { windowsHide:true, stdio:"ignore" });
    } else if (process.platform === "darwin") exec(`open "${url}"`);
    else exec(`xdg-open "${url}"`);
  } catch (_) {}
}

app.get("/api/data/backup", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    res.json({ ok: true, data });
  } catch (_) {
    res.json({ ok: true, data: null });
  }
});

let lastAutoSnapshotAt = 0;
app.post("/api/data/backup", (req, res) => {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    const payload = {
      db: req.body?.db || null,
      page: req.body?.page || "dashboard",
      filters: req.body?.filters || {},
      savedAt: new Date().toISOString()
    };
    if (!payload.db) return res.status(400).json({ ok: false, error: "No database supplied." });
    // Keep periodic historical copies of the PREVIOUS good database before overwriting it.
    if (fs.existsSync(DATA_FILE) && Date.now() - lastAutoSnapshotAt > 15 * 60 * 1000) {
      createDataSnapshot("auto"); lastAutoSnapshotAt = Date.now();
    }
    const temp = DATA_FILE + ".tmp";
    fs.writeFileSync(temp, JSON.stringify(payload, null, 2), "utf8");
    fs.renameSync(temp, DATA_FILE);
    res.json({ ok: true, savedAt: payload.savedAt });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.get("/api/data/backups", (req, res) => {
  try {
    const backups = listDataBackups().map(name => {
      const st = fs.statSync(path.join(BACKUP_DIR, name));
      return { name, savedAt: st.mtime.toISOString(), size: st.size };
    });
    res.json({ ok: true, backups });
  } catch (e) { res.status(500).json({ ok: false, error: e.message }); }
});

app.post("/api/data/backups/create", (req, res) => {
  const name = createDataSnapshot("manual");
  if (!name) return res.status(404).json({ ok: false, error: "No current database to back up yet." });
  res.json({ ok: true, name });
});

app.post("/api/data/backups/restore", (req, res) => {
  try {
    const name = String(req.body?.name || "");
    if (!/^vetted-resupply-.*\.json$/.test(name)) return res.status(400).json({ ok: false, error: "Invalid backup name." });
    const source = path.join(BACKUP_DIR, name);
    if (!fs.existsSync(source)) return res.status(404).json({ ok: false, error: "Backup not found." });
    createDataSnapshot("before-restore");
    const parsed = JSON.parse(fs.readFileSync(source, "utf8"));
    if (!parsed?.db) throw new Error("Backup does not contain a Vetted Resupply database.");
    const temp = DATA_FILE + ".tmp";
    fs.writeFileSync(temp, JSON.stringify(parsed, null, 2), "utf8");
    fs.renameSync(temp, DATA_FILE);
    res.json({ ok: true, data: parsed });
  } catch (e) { res.status(500).json({ ok: false, error: e.message }); }
});

function closeAppWindowSoon() {
  if (IS_ELECTRON_DESKTOP) {
    try {
      const e = electronApi();
      if (e?.BrowserWindow) {
        setTimeout(() => e.BrowserWindow.getAllWindows().forEach(w => { try { w.close(); } catch (_) {} }), 40);
        return;
      }
    } catch (_) {}
  }
  if (process.platform !== "win32") return;
  try {
    // Close only a browser window whose title contains Vetted Resupply; do not kill the user's browser.
    const ps = [
      "Start-Sleep -Milliseconds 60",
      "$targets = Get-Process msedge,chrome -ErrorAction SilentlyContinue | Where-Object { $_.MainWindowTitle -like '*Vetted Resupply*' }",
      "$targets | ForEach-Object { $_.CloseMainWindow() | Out-Null }"
    ].join('; ');
    const child = spawn("powershell.exe", ["-NoProfile", "-WindowStyle", "Hidden", "-Command", ps], {
      detached: true,
      windowsHide: true,
      stdio: "ignore"
    });
    child.unref();
  } catch (_) {}
}



app.get("/api/cloud/setup-sql", (req,res)=>{
  try{res.json({ok:true,sql:fs.readFileSync(path.join(__dirname,"CLOUD_ACCOUNTS_SETUP.sql"),"utf8")});}catch(e){res.status(500).json({ok:false,error:e.message});}
});
app.get("/api/cloud/status", (req,res)=>{res.set("Cache-Control","no-store");res.json({ok:true,status:publicCloudStatus()});});
const VR_PRICING=Object.freeze({
  monthly:{label:"Monthly",amountCents:1000,currency:"usd",interval:"month"},
  annual:{label:"Annual",amountCents:12000,currency:"usd",interval:"year"},
  lifetime:{label:"Lifetime",amountCents:120000,currency:"usd",interval:"once"}
});
function normalizeEntitlement(row){
  if(!row)return {configured:true,plan:null,status:"none",hasAccess:false,currentPeriodEnd:null,lifetime:false};
  return {configured:true,plan:row.plan||null,status:row.status||"none",hasAccess:!!row.has_access,currentPeriodEnd:row.current_period_end||null,lifetime:!!row.lifetime};
}
app.get("/api/license/plans",(req,res)=>res.json({ok:true,plans:VR_PRICING}));
app.get("/api/license/status",async(req,res)=>{
  res.set("Cache-Control","no-store");
  try{
    const rows=await cloudRpc("vr_my_entitlement",{}),row=Array.isArray(rows)?rows[0]:rows;
    res.json({ok:true,entitlement:normalizeEntitlement(row),plans:VR_PRICING});
  }catch(e){
    const msg=String(e?.message||e),notInstalled=/vr_my_entitlement|schema cache|function.*not found/i.test(msg);
    res.status(notInstalled?503:500).json({ok:false,entitlement:{configured:!notInstalled,plan:null,status:"unknown",hasAccess:false,currentPeriodEnd:null,lifetime:false},error:notInstalled?"Entitlement database is not installed yet. Run ENTITLEMENTS_SETUP.sql in Vetted Resupply Cloud.":msg});
  }
});
app.post("/api/cloud/signup", async (req,res)=>{
  try{
    const email=String(req.body?.email||"").trim(), password=String(req.body?.password||"");
    if(!email||password.length<8) throw new Error("Enter an email address and a password with at least 8 characters.");
    const data=await cloudAuthRequest("signup",{email,password});
    if(data?.access_token){saveCloudAccount({accessToken:data.access_token,refreshToken:data.refresh_token||"",expiresAt:Date.now()+Number(data.expires_in||3600)*1000,email:data.user?.email||email});}
    else saveCloudAccount({email});
    res.json({ok:true,signedIn:!!data?.access_token,needsEmailConfirmation:!data?.access_token,email:data?.user?.email||email});
  }catch(e){res.status(500).json({ok:false,error:e.message});}
});
app.post("/api/cloud/signin", async (req,res)=>{
  try{
    const email=String(req.body?.email||"").trim(),password=String(req.body?.password||"");
    const data=await cloudAuthRequest("token?grant_type=password",{email,password});
    const a=saveCloudAccount({accessToken:data.access_token||"",refreshToken:data.refresh_token||"",expiresAt:Date.now()+Number(data.expires_in||3600)*1000,email:data.user?.email||email});
    const businesses=await cloudRpc("vr_account_businesses",{});
    let patch={}; if(Array.isArray(businesses)&&businesses.length===1){patch={businessId:businesses[0].business_id,businessName:businesses[0].business_name};saveSyncConfig({enabled:false});}
    const updated=saveCloudAccount(patch); res.json({ok:true,status:publicCloudStatus(),businesses:businesses||[],account:updated});
  }catch(e){res.status(500).json({ok:false,error:e.message});}
});
app.post("/api/cloud/forgot-password", async (req,res)=>{
  try{
    const email=String(req.body?.email||"").trim(); if(!email)throw new Error("Enter your email address first.");
    await cloudAuthRequest("recover",{email,redirect_to:"http://localhost:3000/?vr_password_reset=1"});
    res.json({ok:true});
  }catch(e){res.status(500).json({ok:false,error:e.message});}
});
app.post("/api/cloud/reset-password", async (req,res)=>{
  try{
    const accessToken=String(req.body?.accessToken||"").trim(),password=String(req.body?.password||"");
    if(!accessToken)throw new Error("Password reset link is missing or expired.");
    if(password.length<8)throw new Error("Password must be at least 8 characters.");
    const svc=loadCloudServiceConfig();
    const r=await fetch(`${svc.projectUrl}/auth/v1/user`,{method:"PUT",headers:{"Content-Type":"application/json","apikey":svc.anonKey,"Authorization":`Bearer ${accessToken}`},body:JSON.stringify({password})});
    const text=await r.text(); let data=null; try{data=text?JSON.parse(text):null}catch(_){data=text}
    if(!r.ok)throw new Error(data?.msg||data?.message||data?.error_description||data?.error||text||`HTTP ${r.status}`);
    res.json({ok:true});
  }catch(e){res.status(500).json({ok:false,error:e.message});}
});
app.post("/api/cloud/create-business", async (req,res)=>{
  try{
    const name=String(req.body?.businessName||"").trim(); const payload=req.body?.data;
    if(!name)throw new Error("Enter your business name first.");
    if(!payload?.db)throw new Error("Vetted Resupply could not read the current business data.");
    const a=loadCloudAccount();
    const result=await cloudRpc("vr_create_business",{p_business_name:name,p_data:payload,p_device_id:a.deviceId});
    const row=Array.isArray(result)?result[0]:result; if(!row?.business_id)throw new Error("Cloud did not return the new business.");
    saveCloudAccount({businessId:row.business_id,businessName:row.business_name||name,lastRevision:Number(row.revision||1),lastSyncAt:new Date().toISOString()});
    saveSyncConfig({enabled:false});
    res.json({ok:true,status:publicCloudStatus(),result:row});
  }catch(e){res.status(500).json({ok:false,error:e.message});}
});
app.post("/api/cloud/signout", (req,res)=>{try{const a=loadCloudAccount();saveCloudAccount({accessToken:"",refreshToken:"",expiresAt:0,email:"",businessId:"",businessName:"",lastRevision:0,lastSyncAt:null,deviceId:a.deviceId});res.json({ok:true,status:publicCloudStatus()});}catch(e){res.status(500).json({ok:false,error:e.message});}});
app.get("/api/cloud/businesses", async (req,res)=>{try{const rows=await cloudRpc("vr_account_businesses",{});res.json({ok:true,businesses:rows||[]});}catch(e){res.status(500).json({ok:false,error:e.message});}});
app.post("/api/cloud/select-business", async (req,res)=>{try{const id=String(req.body?.businessId||"");const rows=await cloudRpc("vr_account_businesses",{});const row=(rows||[]).find(x=>x.business_id===id);if(!row)throw new Error("Business not found for this account.");saveCloudAccount({businessId:row.business_id,businessName:row.business_name,lastRevision:0});saveSyncConfig({enabled:false});res.json({ok:true,status:publicCloudStatus()});}catch(e){res.status(500).json({ok:false,error:e.message});}});
app.post("/api/cloud/claim-legacy", async (req,res)=>{
  try{
    const legacy=loadSyncConfig(); if(!(legacy.workspaceId&&legacy.syncSecret))throw new Error("No existing shared workspace is available to migrate.");
    const name=String(req.body?.businessName||"Vetted Leather").trim()||"My Business";
    const result=await cloudRpc("vr_claim_legacy_workspace",{p_workspace_id:legacy.workspaceId,p_sync_secret:legacy.syncSecret,p_business_name:name,p_device_id:loadCloudAccount().deviceId});
    const row=Array.isArray(result)?result[0]:result; if(!row?.business_id)throw new Error("Migration did not return a business account.");
    saveCloudAccount({businessId:row.business_id,businessName:row.business_name||name,lastRevision:Number(row.revision||0),lastSyncAt:new Date().toISOString()});
    saveSyncConfig({enabled:false});
    res.json({ok:true,status:publicCloudStatus(),result:row});
  }catch(e){res.status(500).json({ok:false,error:e.message});}
});
app.post("/api/cloud/push", async (req,res)=>{
  try{
    const a=loadCloudAccount(); if(!a.businessId)throw new Error("Choose a business first."); const payload=req.body?.data; if(!payload?.db)throw new Error("No database supplied for cloud sync.");
    const result=await cloudRpc("vr_account_push",{p_business_id:a.businessId,p_data:payload,p_device_id:a.deviceId}); const row=Array.isArray(result)?result[0]:result;
    saveCloudAccount({lastRevision:Number(row?.revision||a.lastRevision||0),lastSyncAt:new Date().toISOString()});res.json({ok:true,result:row,status:publicCloudStatus()});
  }catch(e){res.status(500).json({ok:false,error:e.message});}
});
app.get("/api/cloud/pull", async (req,res)=>{
  res.set("Cache-Control","no-store, no-cache, must-revalidate, proxy-revalidate");
  try{
    const a=loadCloudAccount(); if(!a.businessId)return res.json({ok:true,changed:false,status:publicCloudStatus()});
    const result=await cloudRpc("vr_account_pull",{p_business_id:a.businessId}); const row=Array.isArray(result)?result[0]:result; const rev=Number(row?.revision||0);
    if(!row?.data||rev<=Number(a.lastRevision||0))return res.json({ok:true,changed:false,revision:rev,status:publicCloudStatus()});
    createDataSnapshot("before-cloud-pull"); const tmp=DATA_FILE+".tmp";fs.writeFileSync(tmp,JSON.stringify(row.data,null,2),"utf8");fs.renameSync(tmp,DATA_FILE);
    saveCloudAccount({lastRevision:rev,lastSyncAt:new Date().toISOString()});res.json({ok:true,changed:true,revision:rev,data:row.data,status:publicCloudStatus()});
  }catch(e){res.status(500).json({ok:false,error:e.message});}
});
app.post("/api/cloud/pull-force", async (req,res)=>{
  try{
    const a=loadCloudAccount(); if(!a.businessId)throw new Error("Choose a business first."); const result=await cloudRpc("vr_account_pull",{p_business_id:a.businessId}); const row=Array.isArray(result)?result[0]:result;if(!row?.data)throw new Error("Business cloud data was not found.");
    createDataSnapshot("before-cloud-pull");const tmp=DATA_FILE+".tmp";fs.writeFileSync(tmp,JSON.stringify(row.data,null,2),"utf8");fs.renameSync(tmp,DATA_FILE);saveCloudAccount({lastRevision:Number(row.revision||0),lastSyncAt:new Date().toISOString()});res.json({ok:true,data:row.data,status:publicCloudStatus()});
  }catch(e){res.status(500).json({ok:false,error:e.message});}
});

// -----------------------------------------------------------------------------
// Desktop Cloud Account proxy FALLBACK
// IMPORTANT: this must stay AFTER the explicit /api/cloud routes above.
// Express evaluates middleware in registration order. When this proxy was above
// /api/cloud/signin, /status, /pull, etc., it intercepted those requests before
// the local handlers could run.
// -----------------------------------------------------------------------------
const VR_CLOUD_API_WORKER = "https://vetted-resupply-api.vettedresupply.workers.dev";

app.use("/api/cloud", async (req, res) => {
  try {
    const suffix = req.originalUrl.startsWith("/api/cloud")
      ? req.originalUrl.slice("/api/cloud".length)
      : req.url;
    const target = VR_CLOUD_API_WORKER + "/api/cloud" + suffix;

    const headers = {};
    const authorization = req.get("authorization");
    const contentType = req.get("content-type");
    if (authorization) headers.Authorization = authorization;
    if (contentType) headers["Content-Type"] = contentType;

    const method = String(req.method || "GET").toUpperCase();
    const options = { method, headers };
    if (method !== "GET" && method !== "HEAD") {
      if (req.body !== undefined && contentType && contentType.includes("application/json")) {
        options.body = JSON.stringify(req.body);
      } else if (typeof req.body === "string" || Buffer.isBuffer(req.body)) {
        options.body = req.body;
      }
    }

    const upstream = await fetch(target, options);
    const text = await upstream.text();
    const upstreamType = upstream.headers.get("content-type");
    if (upstreamType) res.set("Content-Type", upstreamType);
    res.set("Cache-Control", "no-store");
    res.status(upstream.status).send(text);
  } catch (e) {
    console.error("Cloud proxy error:", e);
    res.status(502).json({ ok: false, error: "Could not reach Vetted Resupply Cloud: " + (e?.message || String(e)) });
  }
});

app.get("/api/sync/setup-sql", (req, res) => {
  try {
    const sqlPath=path.join(__dirname,"LIVE_SYNC_SETUP.sql");
    res.json({ok:true,sql:fs.readFileSync(sqlPath,"utf8")});
  } catch(e){ res.status(500).json({ok:false,error:e.message}); }
});

app.get("/api/sync/config", (req, res) => {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.json({ ok:true, config: publicSyncConfig() });
});

app.post("/api/sync/config", (req, res) => {
  try {
    const body=req.body||{};
    const cfg=saveSyncConfig({
      enabled: !!body.enabled,
      projectUrl: String(body.projectUrl||"").trim().replace(/\/$/,""),
      anonKey: String(body.anonKey||"").trim(),
      workspaceId: String(body.workspaceId||"").trim(),
      syncSecret: String(body.syncSecret||"").trim()
    });
    res.json({ok:true,config:publicSyncConfig(cfg)});
  } catch(e){ res.status(500).json({ok:false,error:e.message}); }
});

app.post("/api/sync/create", async (req, res) => {
  try {
    const cfg=loadSyncConfig();
    if (!(cfg.projectUrl&&cfg.anonKey&&cfg.workspaceId&&cfg.syncSecret)) throw new Error("Complete all shared workspace fields first.");
    let local=null;
    try { local=JSON.parse(fs.readFileSync(DATA_FILE,"utf8")); } catch(_){}
    if (!local?.db) throw new Error("No local Vetted Resupply data exists yet.");
    const result=await syncRpc("vr_create_workspace",{
      p_workspace_id:cfg.workspaceId,
      p_sync_secret:cfg.syncSecret,
      p_data:local,
      p_device_id:cfg.deviceId
    },cfg);
    const row=Array.isArray(result)?result[0]:result;
    const updated=saveSyncConfig({enabled:true,lastRevision:Number(row?.revision||1),lastSyncAt:new Date().toISOString()});
    res.json({ok:true,result:row,config:publicSyncConfig(updated)});
  } catch(e){ res.status(500).json({ok:false,error:e.message}); }
});

app.post("/api/sync/push", async (req, res) => {
  try {
    const cfg=loadSyncConfig();
    if (!cfg.enabled) return res.json({ok:true,skipped:true});
    const payload=req.body?.data;
    if (!payload?.db) throw new Error("No database supplied for sync.");
    const result=await syncRpc("vr_push",{
      p_workspace_id:cfg.workspaceId,
      p_sync_secret:cfg.syncSecret,
      p_data:payload,
      p_device_id:cfg.deviceId
    },cfg);
    const row=Array.isArray(result)?result[0]:result;
    const updated=saveSyncConfig({lastRevision:Number(row?.revision||cfg.lastRevision||0),lastSyncAt:new Date().toISOString()});
    res.json({ok:true,result:row,config:publicSyncConfig(updated)});
  } catch(e){ res.status(500).json({ok:false,error:e.message}); }
});

app.get("/api/sync/pull", async (req, res) => {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  try {
    const cfg=loadSyncConfig();
    if (!cfg.enabled) return res.json({ok:true,skipped:true,config:publicSyncConfig(cfg)});
    const result=await syncRpc("vr_pull",{p_workspace_id:cfg.workspaceId,p_sync_secret:cfg.syncSecret},cfg);
    const row=Array.isArray(result)?result[0]:result;
    const rev=Number(row?.revision||0);
    if (!row?.data) return res.json({ok:true,changed:false,config:publicSyncConfig(cfg)});
    if (rev<=Number(cfg.lastRevision||0)) return res.json({ok:true,changed:false,revision:rev,config:publicSyncConfig(cfg)});
    createDataSnapshot("before-sync-pull");
    const temp=DATA_FILE+".tmp";
    fs.writeFileSync(temp,JSON.stringify(row.data,null,2),"utf8");
    fs.renameSync(temp,DATA_FILE);
    const updated=saveSyncConfig({lastRevision:rev,lastSyncAt:new Date().toISOString()});
    res.json({ok:true,changed:true,revision:rev,data:row.data,updatedBy:row.updated_by||null,updatedAt:row.updated_at||null,config:publicSyncConfig(updated)});
  } catch(e){ res.status(500).json({ok:false,error:e.message}); }
});

app.post("/api/sync/pull-force", async (req, res) => {
  try {
    const cfg=loadSyncConfig();
    const result=await syncRpc("vr_pull",{p_workspace_id:cfg.workspaceId,p_sync_secret:cfg.syncSecret},cfg);
    const row=Array.isArray(result)?result[0]:result;
    if (!row?.data) throw new Error("Shared workspace has no data yet.");
    createDataSnapshot("before-sync-pull");
    const temp=DATA_FILE+".tmp";
    fs.writeFileSync(temp,JSON.stringify(row.data,null,2),"utf8");
    fs.renameSync(temp,DATA_FILE);
    const updated=saveSyncConfig({enabled:true,lastRevision:Number(row.revision||0),lastSyncAt:new Date().toISOString()});
    res.json({ok:true,data:row.data,revision:Number(row.revision||0),config:publicSyncConfig(updated)});
  } catch(e){ res.status(500).json({ok:false,error:e.message}); }
});

app.post("/api/sync/disable", (req,res)=>{
  try{const cfg=saveSyncConfig({enabled:false});res.json({ok:true,config:publicSyncConfig(cfg)});}catch(e){res.status(500).json({ok:false,error:e.message});}
});

app.get("/api/update/status", (req,res)=>{
  const cfg=loadUpdateConfig();
  const configured=!!(normalizeGithubRepo(cfg.githubRepo||process.env.VR_UPDATE_GITHUB_REPO||"")||String(cfg.manifestUrl||process.env.VR_UPDATE_MANIFEST_URL||"").trim());
  res.json({ok:true,state:updateState,configured,config:{githubRepo:cfg.githubRepo||"",manifestUrl:cfg.manifestUrl||"",autoDownload:cfg.autoDownload!==false}});
});

app.post("/api/update/config", express.json(), (req,res)=>{
  try{
    const githubRepo=normalizeGithubRepo(req.body?.githubRepo||"");
    const manifestUrl=String(req.body?.manifestUrl||"").trim();
    if(manifestUrl){const u=new URL(manifestUrl);if(!["http:","https:"].includes(u.protocol))throw new Error("Release feed URL must use http or https.");}
    const cfg=saveUpdateConfig({githubRepo,manifestUrl,autoDownload:req.body?.autoDownload!==false});
    updateState={status:"idle",currentVersion:CURRENT_VERSION,latestVersion:null,readyZip:null,lastCheckedAt:null,error:null};
    res.json({ok:true,config:{githubRepo:cfg.githubRepo,manifestUrl:cfg.manifestUrl,autoDownload:cfg.autoDownload}});
  }catch(e){res.status(400).json({ok:false,error:String(e.message||e)});}
});

app.post("/api/update/check", async (req,res)=>{
  const state=await checkForRelease();
  res.json({ok:state.status!=="error",state});
});

app.post("/api/update/install", (req,res)=>{
  try{
    const zip=updateState.readyZip;
    if(!zip || !fs.existsSync(zip)) return res.status(404).json({ok:false,error:"No downloaded update is ready."});
    res.json({ok:true,message:"Restarting to install update."});
    const env={...process.env};
    let exe=process.execPath, args=[path.join(__dirname,"apply-update.js"),zip,String(process.pid)];
    if(process.versions.electron){ env.ELECTRON_RUN_AS_NODE="1"; }
    const child=spawn(exe,args,{detached:true,stdio:"ignore",windowsHide:true,env});
    child.unref();
    setTimeout(()=>{
      if(IS_ELECTRON_DESKTOP){ try{electronApi()?.app?.quit()}catch(_){process.exit(0)} }
      else process.exit(0);
    },200);
  }catch(e){ res.status(500).json({ok:false,error:String(e.message||e)}); }
});

app.post("/api/system/open-external", express.json(), (req, res) => {
  try {
    const raw = String(req.body?.url || "").trim();
    const parsed = new URL(raw);
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return res.status(400).json({ ok:false, error:'Only http/https links are allowed.' });
    }
    const url = parsed.toString();
    if (process.platform === 'win32') {
      // Empty title argument is required by Windows START. This delegates the URL
      // to the user's Windows default browser rather than the Edge app window.
      spawn('cmd.exe', ['/d', '/s', '/c', 'start', '""', url], {
        detached:true, stdio:'ignore', windowsHide:true
      }).unref();
    } else if (process.platform === 'darwin') {
      spawn('open', [url], {detached:true, stdio:'ignore'}).unref();
    } else {
      spawn('xdg-open', [url], {detached:true, stdio:'ignore'}).unref();
    }
    res.json({ok:true});
  } catch (e) {
    res.status(400).json({ok:false, error:String(e.message || e)});
  }
});

let windowCloseTimer = null;

app.post("/api/system/window-active", (req, res) => {
  if (windowCloseTimer) { clearTimeout(windowCloseTimer); windowCloseTimer = null; }
  res.json({ ok: true });
});

app.post("/api/system/window-closing", (req, res) => {
  if (IS_ELECTRON_DESKTOP) {
    return res.json({ ok: true, pending: false, desktop: true });
  }
  if (windowCloseTimer) clearTimeout(windowCloseTimer);
  windowCloseTimer = setTimeout(() => process.exit(0), 1200);
  res.json({ ok: true, pending: true });
});

app.post("/api/system/shutdown", (req, res) => {
  if (windowCloseTimer) { clearTimeout(windowCloseTimer); windowCloseTimer = null; }
  // Close the visible app window first. Its pagehide beacon then shuts the
  // local server down after the window is already gone, preventing the dead-page flash.
  res.json({ ok: true, message: "Vetted Resupply is closing." });
  closeAppWindowSoon();
  // Safety fallback only: if Edge fails to send pagehide, do not leave Node around forever.
  windowCloseTimer = setTimeout(() => process.exit(0), 15000);
});

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

app.listen(PORT, () => {
  ensureWindowsHiddenLauncher();
  console.log(`Vetted Resupply running at http://localhost:${PORT}`);
  console.log(`Shopify OAuth callback: ${REDIRECT_URI}`);
  console.log("Client Secret and Shopify access token stay server-side and are never sent to the browser.");
  openBrowser(`http://localhost:${PORT}`);
  setTimeout(()=>checkForRelease().catch(()=>{}),5000);
  setInterval(()=>checkForRelease().catch(()=>{}),6*60*60*1000).unref();
});
