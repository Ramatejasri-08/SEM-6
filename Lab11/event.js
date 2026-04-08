const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('greet', (name) => {
    console.log(`Hello ${name}!`);
});
eventEmitter.on('greet', () => {
    console.log('Welcome to Node.js events!');
});
eventEmitter.emit('greet', 'bro');