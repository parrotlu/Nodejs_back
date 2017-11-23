const https=require('https');
const fs=require('fs');

let request=https.request({
  hostname:'nodejs.org',
  protocol:'https:',
  path:'/static/images/logo.svg'
})

request.on('response',(res)=>{
  console.log(res.statusCode);
  let data='';
  res.on('data',(chunk)=>{
    data+=chunk;
  });
  res.on('end',()=>{
    fs.writeFile('./nodejs.svg',data,'binary',(err)=>{
      if(err) throw err;
      console.log('downloaded');
    });
  });
});
request.end();