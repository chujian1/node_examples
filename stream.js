/**
 *读出流
 * Created by ypj on 17-12-13.
 */

var fs = require('fs');
var data = '';
var readerStream = fs.createReadStream('test.txt');
readerStream.setEncoding('utf-8');
readerStream.on('data',function (chunk) {
    data += chunk;
});
readerStream.on('end',function () {
    console.log(data);
});
readerStream.on('error',function (err) {
    console.log(err.stack);
});
console.log('程序执行完毕');
