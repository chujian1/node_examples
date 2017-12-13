/**
 * 压缩
 * Created by ypj on 17-12-13.
 */
var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('test.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('out.txt.gz'));
console.log('压缩完成');