/*pool:池塘  池化技术*/

const  mysql=require('mysql');

let pool=mysql.createPool({
  user:'root',
  connectionLimit: 10,
})
pool.getConnection((err,connection)=>{
  if(err) throw err;
  let uname="'or ' a '=' a"//'tom'; 直接拼接SQL语句存在sql注入的可能
  let upwd="'or ' a '=' a"//'123456';
  let sql="SELECT * FROM xz.xz_user WHERE uname=? AND upwd=?";
  console.log(sql);
  connection.query(sql,[uname,upwd],(err,results,fields)=>{
    if(err) throw err;
    console.log(results);
  })
  connection.release();
})