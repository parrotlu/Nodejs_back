/**
 * Created by web-01 on 2017/11/10.
 */
const http=require("http");
let serv=http.createServer((req,res)=>{
    res.write("Hello, Node.js!");
    res.end("test...");
  }
);
serv.listen("8088");