/**
 *写入流
 * Created by ypj on 17-12-13.
 */
var fs = require('fs');
var data = 'i love js\n';
var writerStream = fs.createWriteStream('out.txt');
writerStream.write(data,'utf-8');
writerStream.end();
writerStream.on('finish',function () {
    console.log('写入完毕');
});
writerStream.on('error',function (err) {
    console.log(err.stack);
});
console.log('完成');
