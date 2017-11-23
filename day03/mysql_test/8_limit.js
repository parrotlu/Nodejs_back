const mysql=require('mysql');
let pool=mysql.createPool({
  connectionLimit:10,
  user:'root'
});
pool.getConnection((err,connection)=>{
  if(err) throw err;
  let sql='select ename from scott.emp limit 3 offset 3';
  connection.query(sql,(err,results,fields)=>{
    if(err) throw err;
    console.log(results);
  })
})