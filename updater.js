const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

const appDir = __dirname;
const rootDir = path.dirname(appDir);
const updatesDir = path.join(rootDir, 'Updates');
fs.mkdirSync(updatesDir, {recursive:true});

function newestZip() {
  return fs.readdirSync(updatesDir)
    .filter(f => f.toLowerCase().endsWith('.zip'))
    .map(f => ({name:f, p:path.join(updatesDir,f), m:fs.statSync(path.join(updatesDir,f)).mtimeMs}))
    .sort((a,b)=>b.m-a.m)[0];
}
function copyRecursive(src,dst) {
  const st=fs.statSync(src);
  if(st.isDirectory()) {
    fs.mkdirSync(dst,{recursive:true});
    for(const name of fs.readdirSync(src)) copyRecursive(path.join(src,name),path.join(dst,name));
  } else {
    fs.mkdirSync(path.dirname(dst),{recursive:true});
    fs.copyFileSync(src,dst);
  }
}
function findPayload(dir) {
  let cur=dir;
  for(let i=0;i<4;i++) {
    if(fs.existsSync(path.join(cur,'server.js')) && fs.existsSync(path.join(cur,'public','index.html'))) return cur;
    const kids=fs.readdirSync(cur).filter(n=>fs.statSync(path.join(cur,n)).isDirectory());
    if(kids.length!==1) break;
    cur=path.join(cur,kids[0]);
  }
  return null;
}
function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p,'utf8')); } catch(_) { return null; }
}
function dependencySignature(pkg) {
  if(!pkg) return '';
  const picked = {
    dependencies: pkg.dependencies || {},
    optionalDependencies: pkg.optionalDependencies || {},
    peerDependencies: pkg.peerDependencies || {}
  };
  return JSON.stringify(picked);
}
function dependenciesChanged(existingPath,incomingPath) {
  if(!fs.existsSync(incomingPath)) return false;
  if(!fs.existsSync(existingPath)) return true;
  return dependencySignature(readJson(existingPath)) !== dependencySignature(readJson(incomingPath));
}
function runNpmInstall() {
  console.log('Dependencies changed; updating them...');
  if(process.platform === 'win32') {
    execFileSync(process.env.ComSpec || 'C:\\Windows\\System32\\cmd.exe',
      ['/d','/s','/c','npm install --omit=dev'],
      {cwd:appDir, stdio:'inherit'});
  } else {
    execFileSync('npm',['install','--omit=dev'],{cwd:appDir,stdio:'inherit'});
  }
}
function pauseAndExit() {
  process.stdout.write('\nPress Enter to close...');
  process.stdin.resume();
  process.stdin.once('data',()=>process.exit(0));
}

try {
  const zip=newestZip();
  if(!zip) {
    console.log(`No update ZIP found.\n\nPut the update ZIP in:\n${updatesDir}\n\nThen run this shortcut again.`);
    pauseAndExit();
    return;
  }

  console.log(`Installing update: ${zip.name}`);
  const temp=fs.mkdtempSync(path.join(os.tmpdir(),'vetted-resupply-update-'));
  execFileSync('powershell.exe',[
    '-NoProfile','-Command',
    `Expand-Archive -LiteralPath '${zip.p.replace(/'/g,"''")}' -DestinationPath '${temp.replace(/'/g,"''")}' -Force`
  ],{stdio:'inherit'});

  const payload=findPayload(temp);
  if(!payload) throw new Error('The ZIP does not look like a Vetted Resupply update package.');

  const existingPackage=path.join(appDir,'package.json');
  const incomingPackage=path.join(payload,'package.json');
  const depsChanged = dependenciesChanged(existingPackage,incomingPackage);

  // Never let a normal app update overwrite private/local state or the updater itself.
  const preserve=new Set(['.env','.shopify-session.json','node_modules','updater.js']);
  for(const name of fs.readdirSync(payload)) {
    if(preserve.has(name)) continue;
    copyRecursive(path.join(payload,name),path.join(appDir,name));
  }

  if(depsChanged) runNpmInstall();
  else console.log('Dependencies unchanged; skipping npm install.');

  console.log('\nUpdate installed successfully.');
  console.log('Your .env, Shopify session, node_modules, updater, and local browser data were left alone.');
  try { fs.renameSync(zip.p, zip.p+'.installed'); } catch(_) {}
} catch(e) {
  console.error('\nUpdate failed:', e && e.message ? e.message : e);
}
pauseAndExit();
