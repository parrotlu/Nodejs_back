const mysql=require('mysql');
let pool=mysql.createPool({
  connectionLimit:10,
  user:'root'
})

pool.getConnection((err,connection)=>{
  if(err) throw err;
  let sql='delete from scott.emp where empno=?';
  connection.query(sql,[7521],(err,results,fields)=>{
    if(err) throw err;
    console.log(results.affectedRows);
  })
})