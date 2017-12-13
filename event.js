/**
 * 事件监听
 * Created by ypj on 17-12-13.
 */
 var eventEmitter = require('events').EventEmitter;
 var event = new eventEmitter();
 event.on('some_event',function () {
     console.log('some_event 事件触发');
 });
 setTimeout(function () {
     event.emit('some_event');
 },1000);