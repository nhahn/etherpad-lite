var spawn = require('child_process').spawn;
var dir = process.cwd();

//Remove all of the stupid NPM variables -- they mess everything up
tmpEnv = {};
for (env in process.env) { 
  if (!env.match(/^npm/))
  {
    tmpEnv[env] = process.env[env];
  }
}

if (process.env.OPENSHIFT_REPO_DIR != undefined) {
  dir = process.env.OPENSHIFT_REPO_DIR;
}
var fullPath = dir + '/node_modules/ep_etherpad-lite/node/server.js';

var spawn = require('child_process').spawn,
    ls    = spawn('node', [fullPath], {env: tmpEnv});

ls.stdout.on('data', function (data) {
  console.log(data.toString().trim());
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('close', function (code) {
  console.log('child process exited with code ' + code);
});
