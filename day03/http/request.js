const http=require('http');
let ip='122.22.31.45';
let options={
  // protocol:'http:',
  host:'ip.taobao.com',
  path:'/service/getIpInfo.php?ip='+ip
};
let request=http.request(options,(res)=>{
  res.on('data',(buffer)=>{
    console.log(buffer.toString());
  })
})
request.end();