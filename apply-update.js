const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawnSync, spawn } = require('child_process');

const zipPath = process.argv[2];
const parentPid = Number(process.argv[3] || 0);
const appDir = __dirname;
const rootDir = path.dirname(appDir);

function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }
async function waitForParent(){
  if(!parentPid) return;
  for(let i=0;i<120;i++){
    try { process.kill(parentPid,0); await sleep(250); }
    catch(_) { return; }
  }
}
function copyRecursive(src,dst){
  const st=fs.statSync(src);
  if(st.isDirectory()){
    fs.mkdirSync(dst,{recursive:true});
    for(const n of fs.readdirSync(src)) copyRecursive(path.join(src,n),path.join(dst,n));
  } else {
    fs.mkdirSync(path.dirname(dst),{recursive:true});
    fs.copyFileSync(src,dst);
  }
}
function findPayload(dir){
  let cur=dir;
  for(let i=0;i<5;i++){
    if(fs.existsSync(path.join(cur,'server.js')) && fs.existsSync(path.join(cur,'public','index.html'))) return cur;
    const kids=fs.readdirSync(cur).filter(n=>{try{return fs.statSync(path.join(cur,n)).isDirectory()}catch(_){return false}});
    if(kids.length!==1) break;
    cur=path.join(cur,kids[0]);
  }
  return null;
}
function readJson(p){ try{return JSON.parse(fs.readFileSync(p,'utf8'))}catch(_){return null} }
function depSig(pkg){ return JSON.stringify({dependencies:pkg?.dependencies||{},optionalDependencies:pkg?.optionalDependencies||{},peerDependencies:pkg?.peerDependencies||{}}); }
function npmCommand(){
  if(process.platform==='win32'){
    const bundled=path.join(rootDir,'Runtime','npm.cmd');
    if(fs.existsSync(bundled)) return {cmd:process.env.ComSpec||'C:\\Windows\\System32\\cmd.exe',args:['/d','/s','/c',`"${bundled}" install --omit=dev --no-audit --no-fund`]};
    return {cmd:process.env.ComSpec||'C:\\Windows\\System32\\cmd.exe',args:['/d','/s','/c','npm install --omit=dev --no-audit --no-fund']};
  }
  const bundled=path.join(rootDir,'Runtime','bin','npm');
  if(fs.existsSync(bundled)) return {cmd:bundled,args:['install','--omit=dev','--no-audit','--no-fund']};
  return {cmd:'npm',args:['install','--omit=dev','--no-audit','--no-fund']};
}
function relaunch(){
  let exe, args;
  if(process.platform==='win32'){
    exe=path.join(appDir,'node_modules','electron','dist','electron.exe'); args=[appDir];
  } else {
    exe=path.join(appDir,'node_modules','.bin','electron'); args=[appDir];
  }
  if(fs.existsSync(exe)) spawn(exe,args,{detached:true,stdio:'ignore',windowsHide:true}).unref();
}

(async()=>{
  try{
    if(!zipPath || !fs.existsSync(zipPath)) throw new Error('Update package not found.');
    await waitForParent();
    const temp=fs.mkdtempSync(path.join(os.tmpdir(),'vetted-resupply-auto-update-'));
    if(process.platform==='win32'){
      const ps=`Expand-Archive -LiteralPath '${zipPath.replace(/'/g,"''")}' -DestinationPath '${temp.replace(/'/g,"''")}' -Force`;
      const r=spawnSync('powershell.exe',['-NoProfile','-ExecutionPolicy','Bypass','-Command',ps],{stdio:'ignore',windowsHide:true});
      if(r.status!==0) throw new Error('Could not unpack update.');
    } else {
      const r=spawnSync('unzip',['-q','-o',zipPath,'-d',temp],{stdio:'ignore'});
      if(r.status!==0) throw new Error('Could not unpack update.');
    }
    const payload=findPayload(temp);
    if(!payload) throw new Error('Invalid Vetted Resupply update package.');
    const depsChanged=depSig(readJson(path.join(appDir,'package.json')))!==depSig(readJson(path.join(payload,'package.json')));
    const preserve=new Set(['.env','.shopify-session.json','node_modules','updater.js']);
    for(const name of fs.readdirSync(payload)){
      if(preserve.has(name)) continue;
      copyRecursive(path.join(payload,name),path.join(appDir,name));
    }
    if(depsChanged){
      const n=npmCommand();
      const r=spawnSync(n.cmd,n.args,{cwd:appDir,stdio:'ignore',windowsHide:true});
      if(r.status!==0) throw new Error('Dependency update failed.');
    }
    try{fs.renameSync(zipPath,zipPath+'.installed')}catch(_){}
    relaunch();
  }catch(e){
    try{fs.writeFileSync(path.join(rootDir,'Data','last-update-error.txt'),String(e?.stack||e),'utf8')}catch(_){}
    relaunch();
  }
})();
