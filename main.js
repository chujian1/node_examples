/**
 *
 * Created by ypj on 17-12-11.
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connect() {
    console.log('连接成功');
}
eventEmitter.on('connection',connectHandler);
eventEmitter.emit('connection');

eventEmitter.on('data_received',function () {
    console.log('接受数据成功');
});
eventEmitter.emit('data_received');

console.log('程序执行完毕');