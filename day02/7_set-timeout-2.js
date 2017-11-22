console.time('timeout');
let start=Date.now();
setTimeout((param)=>{
  console.log('hello:'+param);
  console.log(Date.now()-start);
},1000,'test param')
console.timeEnd('timeout')