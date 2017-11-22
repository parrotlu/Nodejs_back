let buffer=Buffer.from([1,2,3]);
for (let i = 0; i < buffer.length; i++) {
  console.log(buffer[i]);
}

for(let v of buffer){
  console.log(v);
}

for(let k of buffer.keys()){
  console.log(k+'->'+buffer[k]);
}

for(let v of buffer.values()){
  console.log(v);
}

//键值对
for(let pair of buffer.entries()){
  console.log(pair);
}