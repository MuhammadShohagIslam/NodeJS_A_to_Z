/*
        *** Node.js Events ***
            => We can raise our own Event in the Node.js
            => Every action on a computer is an event.
                Like when a connection is made or a file is opended.
            => Objects in Node.js can fire events.
*/
// importing event module
const EventEmitter = require('events'); // EventEmitter is a class, which is a blue print, is not a real life object.

// for raising an event, creating new EventEmitter object instance
const emitter = new EventEmitter();

// register a listener  for bellRing event
emitter.on('bellRing', (period) => {
    console.log(`${period} is Finished `);
});

// raising an event
emitter.emit('bellRing', 'First Class');

// listener must put before raising event, otherwise it is not working
// emitter.on('bellRing', (period) => {
//     console.log(`${period} is Finished `);
// });

/*
 *** If we want to pass multiple arguments when we raise an event, but it is not best practice.
 */
// ragister a listener for afterSchool event
emitter.on('afterSchool', ({ digree, time }) => {
    console.log(`We need ${time} to complete ${digree} digree `);
});
// rasing an event
setTimeout(() => {
    emitter.emit('afterSchool', {
        digree: 'Bachelor',
        time: '4 years',
    });
}, 1000);
