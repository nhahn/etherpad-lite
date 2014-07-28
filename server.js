var spawn = require('child_process').spawn;
var dir = process.cwd();

if (process.env.OPENSHIFT_REPO_DIR != undefined) {
  dir = process.env.OPENSHIFT_REPO_DIR;
}
var fullPath = dir + '/node_modules/ep_etherpad-lite/node/server.js';

var spawn = require('child_process').spawn,
    ls    = spawn('node', [fullPath]);

ls.stdout.on('data', function (data) {
  console.log(data.toString().trim());
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('close', function (code) {
  console.log('child process exited with code ' + code);
});
