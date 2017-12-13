/**
 * 解压
 * Created by ypj on 17-12-13.
 */
var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('out.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('in.txt'));
console.log('解压完成');
