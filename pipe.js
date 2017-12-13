/**
 *管道流
 * Created by ypj on 17-12-13.
 */
var fs = require('fs');
var readStream = fs.createReadStream('test.txt');
var writeStream = fs.createWriteStream('out.txt');
readStream.pipe(writeStream);
console.log('完毕');