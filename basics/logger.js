function log(message) {
  console.log(message);
}

// Module object have a property called exports
// Here we are simply added log function to exports
module.exports.log = log;

// If we have only one thing to export we can direct send it like this
// module.exports = log;
console.log(module);
