console.log('start...');
setTimeout(()=>{
  console.log('set timeout....');
},0);
process.nextTick(()=>{
  console.log('next tick...');
})
console.log('end...');