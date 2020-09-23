var events = require('events');
var eventEmitter = new events.EventEmitter();

var Myfunc = function () {
    console.log('HI THERE ! HAPPY LEARNING');
}
eventEmitter.on('MyEvent', Myfunc);
eventEmitter.emit('MyEvent');