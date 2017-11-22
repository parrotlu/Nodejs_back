/**
 * Created by web-01 on 2017/11/10.
 */

//buffer 缓冲区
let buff1=new Buffer(32);  //字节 byte 位 bit  1byte=8bit
//console.log(buff1);  // 00 -- 8bit

let buff2=new Buffer([65,66,67]);
//console.log(buff2);

let buff3=new Buffer('ABCD');
//console.log(buff3);

let buff4=Buffer.allocUnsafe(16);
//console.log(buff4);

let buff5=Buffer.from([65,66,67]);
// console.log(buff5);

let buff6=Buffer.from('2');
// console.log(buff6);

// console.log(Buffer.compare(buff5,buff6));

var s1="AA";
var s2="BB";
var b2=new Buffer(30);
b2.write(s1);
b2.write(s2,2);
console.log(b2);
 console.log(b2.toString('utf8'));

console.log(buff3.toString('utf8'));

console.log(Buffer.isEncoding(('utf8')));
console.log(Buffer.isEncoding(('binary'))); //二进制
console.log(Buffer.isEncoding(('hex'))); //十六进制
console.log(Buffer.isEncoding(('ascii'))); //
console.log(Buffer.isEncoding(('base64'))); //

let b1=Buffer.from("你好");
console.log(b1);
console.log(b1.toString('utf8'));
console.log(b1.length);

for (var i = 0; i < b1.length; i++) {
  console.log(b1[i]);
}

