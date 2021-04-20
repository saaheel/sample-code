const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmitter = new EventEmitter();

// myEmitter.emit('TEST_EVENT');

setImmediate(() => {
    myEmitter.emit('TEST_EVENT');
});

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fires');
});

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fires');
});

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fires');
});

// myEmitter.emit('TEST_EVENT');

// Interview question, how many times it was fires ans = 0