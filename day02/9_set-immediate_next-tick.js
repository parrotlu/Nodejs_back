console.log('start...');
setImmediate(()=>{
  console.log('set immediate...');
})
process.nextTick(()=>{
  console.log('next tick');
})
console.log('end...');