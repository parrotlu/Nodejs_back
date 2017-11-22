/**
 * Created by web-01 on 2017/11/10.
 */
//console.log(process.pid);
//console.log(process.arch);
//console.log(process.env);
//console.log(process.cwd());
//console.log(process.execPath);
//console.log(process.versions);
console.log(process.uptime());
//console.log(process.memoryUsage());
//process.kill(process.pid);

const os=require('os');
let start=os.uptime();
console.log(os.uptime()-start);