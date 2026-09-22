const path = require('path');
const http = require('http');
const { app, BrowserWindow, shell, Menu } = require('electron');

const PORT = Number(process.env.PORT || 3000);
const APP_URL = `http://127.0.0.1:${PORT}`;
const APP_ID = 'com.vettedresupply.desktop';
let mainWindow = null;
let serverStartedHere = false;
let secondLaunchRequested = false;

if (process.platform === 'win32') app.setAppUserModelId(APP_ID);

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    // A double-click while the first launch is still warming up must never start
    // a second local service. Remember it and focus the first window once ready.
    if (!mainWindow) { secondLaunchRequested = true; return; }
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.show();
    mainWindow.focus();
  });
}

function pingServer(timeoutMs = 1500) {
  return new Promise((resolve) => {
    let finished = false;

    const finish = (result) => {
      if (finished) return;
      finished = true;
      resolve(result);
    };

    const req = http.get({
      hostname: '127.0.0.1',
      port: PORT,
      path: '/',
      timeout: timeoutMs
    }, (res) => {
      res.resume();

      // Any HTTP response means the local Vetted Resupply
      // server is alive and accepting connections.
      finish(true);
    });

    req.on('timeout', () => {
      req.destroy();
      finish(false);
    });

    req.on('error', () => finish(false));
  });
}
async function ensureServer() {
  if (await pingServer()) return;
  process.env.AUTO_OPEN_BROWSER = '0';
  process.env.VR_DESKTOP_SHELL = '1';
  require('./server.js');
  serverStartedHere = true;
  const started = Date.now();
  while (Date.now() - started < 30000) {
    if (await pingServer(500)) return;
    await new Promise(r => setTimeout(r, 150));
  }
  throw new Error('Vetted Resupply local service did not start in time.');
}

function createWindow() {
  const icon = process.platform === 'win32'
    ? path.join(__dirname, 'public', 'assets', 'vetted-resupply-icon.ico')
    : path.join(__dirname, 'public', 'assets', 'vetted-resupply-icon.png');

  mainWindow = new BrowserWindow({
    width: 1380,
    height: 900,
    minWidth: 980,
    minHeight: 650,
    title: 'Vetted Resupply',
    icon,
    backgroundColor: '#160607',
    autoHideMenuBar: true,
    show: false,
    // Use Windows' native window buttons, but let the title-bar surface match
    // the black Vetted Resupply interface instead of the default light frame.
    ...(process.platform === 'win32' ? {
      titleBarStyle: 'hidden',
      titleBarOverlay: { color: '#050505', symbolColor: '#ffffff', height: 38 }
    } : {}),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\//i.test(url)) return { action: 'allow' };
    if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith(APP_URL) && !url.startsWith(`http://localhost:${PORT}`)) {
      event.preventDefault();
      if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    }
  });

  // Native right-click edit menu for text fields and selected text.
  // This restores the familiar Copy / Paste workflow on both macOS and Windows.
  mainWindow.webContents.on('context-menu', (_event, params) => {
    const flags = params.editFlags || {};
    const template = [];

    if (params.isEditable) {
      template.push(
        { label: 'Undo', role: 'undo', enabled: !!flags.canUndo },
        { label: 'Redo', role: 'redo', enabled: !!flags.canRedo },
        { type: 'separator' },
        { label: 'Cut', role: 'cut', enabled: !!flags.canCut },
        { label: 'Copy', role: 'copy', enabled: !!flags.canCopy },
        { label: 'Paste', role: 'paste', enabled: !!flags.canPaste },
        { type: 'separator' },
        { label: 'Select All', role: 'selectAll' }
      );
    } else if ((params.selectionText || '').trim()) {
      template.push(
        { label: 'Copy', role: 'copy' },
        { type: 'separator' },
        { label: 'Select All', role: 'selectAll' }
      );
    }

    if (template.length) {
      Menu.buildFromTemplate(template).popup({ window: mainWindow });
    }
  });

  if (process.platform === 'win32') {
    mainWindow.webContents.on('did-finish-load', async () => {
      try {
        await mainWindow.webContents.insertCSS(`
          html,body{background:#160607!important}
          body{padding-top:38px!important}
          body::before{
            content:'';position:fixed;left:0;right:0;top:0;height:38px;
            background:#050505;z-index:2147483000;-webkit-app-region:drag;
            border-bottom:1px solid #2f2f2f;
          }
          button,a,input,select,textarea,[role='button']{-webkit-app-region:no-drag}
        `);
      } catch (_) {}
    });
  }

  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.on('close', () => {
    // Native X is authoritative in the desktop build: no confirmation dialog.
    // The Express service is hosted in this Electron process, so it dies with the app.
  });
  mainWindow.on('closed', () => { mainWindow = null; });
  mainWindow.loadURL(APP_URL);
}


async function updateStatus(){
  return new Promise((resolve)=>{
    const req=http.get(`${APP_URL}/api/update/status`,res=>{
      let body=''; res.on('data',d=>body+=d); res.on('end',()=>{try{resolve(JSON.parse(body))}catch(_){resolve(null)}});
    });
    req.on('error',()=>resolve(null)); req.setTimeout(1500,()=>{req.destroy();resolve(null)});
  });
}

async function installReadyUpdate(){
  return new Promise((resolve)=>{
    const u=new URL('/api/update/install',APP_URL);
    const req=http.request({hostname:u.hostname,port:u.port,path:u.pathname,method:'POST',headers:{'Content-Type':'application/json','Content-Length':2}},res=>{
      res.resume(); res.on('end',()=>resolve(res.statusCode>=200&&res.statusCode<300));
    });
    req.on('error',()=>resolve(false)); req.end('{}');
  });
}

let promptedVersion=null;
async function pollUpdates(){
  if(!mainWindow) return;
  const info=await updateStatus();
  const st=info?.state;
  if(st?.status!=='ready' || !st.latestVersion || promptedVersion===st.latestVersion) return;
  promptedVersion=st.latestVersion;
  const {dialog}=require('electron');
  const result=await dialog.showMessageBox(mainWindow,{
    type:'info',
    title:'Vetted Resupply Update',
    message:`Vetted Resupply ${st.latestVersion} is ready to install.`,
    detail:'Your products, supplies, BOMs, inventory, Shopify connection, shared-workspace settings, and backups are preserved.',
    buttons:['Update & Restart','Later'],
    defaultId:0,
    cancelId:1,
    noLink:true
  });
  if(result.response===0) await installReadyUpdate();
}

app.whenReady().then(async () => {
  try {
    if (process.platform === 'darwin' && app.dock) {
      try {
        app.dock.setIcon(path.join(__dirname, 'public', 'assets', 'vetted-resupply-mac-icon.png'));
      } catch (_) {}
    }
    await ensureServer();
    createWindow();
    if (secondLaunchRequested && mainWindow) { mainWindow.show(); mainWindow.focus(); secondLaunchRequested = false; }
    setTimeout(()=>pollUpdates().catch(()=>{}),8000);
    setInterval(()=>pollUpdates().catch(()=>{}),5*60*1000);
  } catch (e) {
    const { dialog } = require('electron');
    dialog.showErrorBox('Vetted Resupply', e && e.message ? e.message : String(e));
    app.quit();
  }
});

app.on('window-all-closed', () => {
  // Vetted Resupply is intentionally a single-window desktop app on both Windows and macOS.
  app.quit();
});

app.on('before-quit', () => {
  // When this Electron process owns the Express service, quitting the app also
  // ends the service. If an older standalone service was already running, the
  // next launch can reuse it safely.
  if (serverStartedHere) process.exitCode = 0;
});
