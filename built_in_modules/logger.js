const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    // Raise an event
    this.emit('log', { id: 12 });
  }
}

module.exports = Logger;
