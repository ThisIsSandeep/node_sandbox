// Node.js has a set of built-in modules which you can use without any further installation

// ------------------------------------------------------------------------ //
// Path Module (To handle file paths)
// ------------------------------------------------------------------------ //
const path = require('path');
// __filename is an argument in module wrapper function
let pathObj = path.parse(__filename); // Formats a path string into a path object
console.log(pathObj);

// ------------------------------------------------------------------------ //
// Os Module (Provides information about the operation system)
// ------------------------------------------------------------------------ //
const os = require('os');
let val;

val = os.totalmem();
val = os.freemem();
val = os.platform();
val = os.arch();
val = os.uptime();
val = os.userInfo();
val = os.type();

console.log(val);

// ------------------------------------------------------------------------ //
// FS Module (To handle the file system)
// ------------------------------------------------------------------------ //

// In fs module every function is of two types async and sync
// always prefer async function

const fs = require('fs');

const files = fs.readdirSync('./');
console.log('Sync: ', files);

fs.readdir('./', (err, result) => {
  if (err) {
    console.log('err: ', err);
  } else {
    console.log('Result: ', result);
  }
});

// ----------------- Simple exercise before logging a message raise an event ----------------------- //
const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('log', arg => {
  console.log('wowwww', arg);
});

logger.log('This is message from event_module');
