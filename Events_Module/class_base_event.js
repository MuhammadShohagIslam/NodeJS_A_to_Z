/*
 *** Class Based Event ***
 */
const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        setTimeout(() => {
            // raising an event
            this.emit('bellRing', 'First Class');
        }, 1000);
    }
}

module.exports = School;
