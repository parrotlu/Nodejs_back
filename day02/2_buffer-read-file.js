const fs=require('fs');
console.log(__dirname);
console.log(__filename);
fs.readFile('../day01/out.log',(err,data)=>{
  if(err) throw err;
  console.log(data.toString());
});