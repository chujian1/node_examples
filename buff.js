/**
 * Created by ypj on 17-12-13.
 */

var buf1 = Buffer.alloc(10);
var buf2 = Buffer.alloc(26);
var buf4 = Buffer.from('test');
var len = buf1.write('i love js');
console.log(len);
console.log(buf1.toString());
for(var i=0 ;i<26;i++)
    buf2[i]=i+97;
console.log(buf2.toString('ascii',3,23));
console.log(buf4.toString());
var json = buf4.toJSON();
console.log(json);
var buf5 = Buffer.concat([buf1,buf4],7);
console.log(buf5.toString());