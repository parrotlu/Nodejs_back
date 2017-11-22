/**
 * Created by web-01 on 2017/11/10.
 */

  const Console=require('console').Console;
let data={id:3,count:36, list:[]};
/*console.log(`count is : %d`,data.count);
console.info(`count is :${data.count}`);
console.warn(`count is : ${data.count}`);
console.error(`count is ${data.count}`);
console.trace('Some Msg');*/

/*
console.dir(data);
console.assert(data.count>0,'count is zero');
console.assert(data.list.length>0,'No data available');
*/

/*
console.time('Long-loop');
for(var i=0;i<1000;i++){
  console.log(i);
}
console.timeEnd('Long-loop');*/
const fs=require('fs');
let out=fs.createWriteStream('out.log');
let err=fs.createWriteStream('err.log');

//var logger=new console.Console(out,err);
var logger=new Console(out,err);
logger.log('输出到out文件汇总的日志11');
logger.error('输出到err文件中的错误日志22');

console.log();
console.log(()=>{});