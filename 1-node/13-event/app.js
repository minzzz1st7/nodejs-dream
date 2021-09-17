const EventEmiter = require('events');
const { EventEmitter } = require('stream');
const emitter = new EventEmitter();

const callback1 = (args) => {
    console.log('first callback -', args);
}
emitter.on('mz', callback1);

emitter.on('mz', (args) => {
    console.log('second callback - ', args);
})

emitter.emit('mz', {message : 1});
emitter.emit('mz', {message : 2});
emitter.removeListener('mz',callback1);
emitter.emit('mz', {message : 3});
