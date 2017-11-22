/**
 * Created by web-01 on 2017/11/10.
 */
/*
* binary 0-1 世界上有10种人，懂二进制的不懂的
* oct  0-7
* dec  0-9
* hex  0-9a-f  #1234ab
* */

let buffer=Buffer.from([0x61,0x62,0x63]); //0x 十六进制，0o八进制
console.log(buffer.toString());

let buf=Buffer.alloc(4); //byte
console.log(buf);
