/**
 * Created by ypj on 17-12-13.
 */

var eventEmit = require('events').EventEmitter;
var event = new eventEmit();
event.on('some_event',function (arg1,arg2) {
    console.log('事件1触发', arg1,arg2);
});
event.on('some_event',function (arg1,arg2) {
    console.log('事件2触发',arg1,arg2);
});
event.emit('some_event','参数1','参数2');