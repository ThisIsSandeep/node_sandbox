// ------------------------------------------------------------------------ //
// GLOBAL OBJECT
// ------------------------------------------------------------------------ //
// In node we don't have window object (like in client side javascript) instead we have global object and all object like console.log, setTimeOut are belongs to global object
global.console.log('I am global objects');

// In client side javascript, when we declare variables and function are added to global scope and can be access via window object.
// and there is chance that we can have two variables with the same name in different files, which override the previous definition of that variable

// Every file in a node app is consider a module, the variables and functions defined in that file or module are scoped to that file (in object oriented programming terms we say they are private they are not aviable outside that module) if we want to use the variable and functions outside the module we have to explicitly export it.

// Every node application have atleast one module which we called main module in this case app.js is main module
// module is an object which consists informmation like: id, exports object, filename etc.
console.log(module);

// To load a module we use require function
const logger = require('./logger');
// this require function return the object that is exported from taget module
console.log(logger); // { log: [Function: log] }
logger.log('This is message from logger');
