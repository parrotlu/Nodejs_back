console.log('start....');
setTimeout(()=>{
  console.log('set timeout...');
},1000);
/*setImmediate(()=>{
  console.log('set immediate....');
})*/ 
sleep(2000)
console.log('end....');

function sleep(millis) {
  let start=Date.now();
  while(Date.now()-start<millis){}
}