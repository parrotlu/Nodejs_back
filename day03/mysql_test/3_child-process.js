/*child process 子进程*/
const cp=require('child_process');
cp.exec('mysql -uroot <'+__dirname+'/scott.sql',(err,stdout,stderr)=>{
  if(err) throw err;
  // console.log(stdout);
})
