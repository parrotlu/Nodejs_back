const http=require('http');
let server=http.createServer((req,res)=>{
  // res.end('server test....');
  console.log(req.url);
  console.log(req.httpVersion);
  console.log(req.headers);
  res.writeHead(200,'OK',{'Content-Type':'text/html;charset=utf-8'});
  // res.write('ok...');
  res.end('测试。。。');
});
server.listen(8080);