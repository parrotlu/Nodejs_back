function sleep(millis) {
  let start=Date.now();
  while(Date.now()-start<millis){}
}

console.log(new Date().getSeconds());
sleep(1000*3);
console.log(new Date().getSeconds());