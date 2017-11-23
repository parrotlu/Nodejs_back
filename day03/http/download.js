const http=require('http');
const fs=require('fs');

let options={
  host:'img.jandan.net',
  path:'/news/2017/10/ab5c781905d741221b5bfb5314a28204.jpg',
  headers:{'User-Agent':'Mozilla/5.0'} //模拟浏览器访问
};
let request=http.request(options,(res)=>{
  console.log(res.statusCode);
  let data='';
  res.setEncoding('binary');
  res.on('data',(buffer)=>{
    data+=buffer
  });
  res.on('end',()=>{
    fs.writeFile('./jian.jpg',data,'binary',(err)=>{
      if(err) throw err;
      console.log('downloaded...');
    })
  })
})
request.end();