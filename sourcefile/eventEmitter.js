var event = require('events');

var myevent1 = new event.EventEmitter();

var myevent2 = new event.EventEmitter();

myevent1.on('some_event', function(){
	console.log('some_event 事件触发');
});
myevent2.on('myevent2_event', function()
{
	console.log('myevent2_event 事件触发');
});
setTimeout(function(){
	myevent1.emit('some_event');
}, 1000);

setTimeout(function(){
	myevent2.emit('myevent2_event');
}, 2000);

