// To handle events (Event -> A signal that something has happened in our application)
// The Events module provides a way of working with events.
// In Node.js, all events are an instance of the EventEmitter object

// EventEmitter class getting from events module
const EventEmitter = require('events');

// creating an instance of class
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', () => {
  console.log('Listener Called');
});

// Raise an event
emitter.emit('messageLogged');

// ----------------- Often we want to pass some data when we raise an event ------------------------ //
const emitterTwo = new EventEmitter();
emitterTwo.on('msg', arg => console.log(arg));
emitterTwo.emit('msg', { id: 12, name: 'sandeep bansal' });

// When we work with events we never work direct object of EventEmitter class instead we extends our class with EventEmitter and makes an object of it rather than direct use of EventEmitter (See in logger.js and app.js)
