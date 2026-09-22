const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

if (process.platform !== 'win32') {
  console.log('This shortcut setup is designed for Windows.');
  process.exit(0);
}

const appDir = __dirname;
const nodeExe = process.execPath;
const desktop = path.join(process.env.USERPROFILE || process.env.HOME, 'Desktop');
const ps = `
$ws = New-Object -ComObject WScript.Shell
$node = '${nodeExe.replace(/'/g,"''")}'
$dir = '${appDir.replace(/'/g,"''")}'
$desktop = '${desktop.replace(/'/g,"''")}'
$s1 = $ws.CreateShortcut((Join-Path $desktop 'Vetted Resupply.lnk'))
$s1.TargetPath = $node
$s1.Arguments = '"' + (Join-Path $dir 'server.js') + '"'
$s1.WorkingDirectory = $dir
$s1.WindowStyle = 7
$s1.Description = 'Start Vetted Resupply'
$s1.Save()
$s2 = $ws.CreateShortcut((Join-Path $desktop 'Update Vetted Resupply.lnk'))
$s2.TargetPath = $node
$s2.Arguments = '"' + (Join-Path $dir 'updater.js') + '"'
$s2.WorkingDirectory = $dir
$s2.WindowStyle = 1
$s2.Description = 'Install the newest Vetted Resupply update from the Updates folder'
$s2.Save()
`;
execFileSync('powershell.exe', ['-NoProfile','-ExecutionPolicy','Bypass','-Command',ps], {stdio:'inherit'});

const updatesDir = path.join(path.dirname(appDir), 'Updates');
fs.mkdirSync(updatesDir, {recursive:true});
console.log('\nDesktop shortcuts created:');
console.log('  Vetted Resupply');
console.log('  Update Vetted Resupply');
console.log(`\nFuture update ZIPs can be placed in:\n  ${updatesDir}`);
console.log('\nSetup complete.');
