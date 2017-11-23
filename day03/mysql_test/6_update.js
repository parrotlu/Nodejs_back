const mysql=require('mysql');
let pool=mysql.createPool({
  connectionLimit:10,
  user:'root'
});
pool.getConnection((err,connection)=>{
  if(err) throw err;
  let sql='UPDATE scott.emp SET ename=? WHERE empno=?';
  connection.query(sql,['scott',7566],(err,results,fields)=>{
    if(err) throw err;
    console.log(results.affectedRows);
  })
});