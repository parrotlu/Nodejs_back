const mysql=require('mysql');
let pool=mysql.createPool({
  connectionLimit:10,
  user:'root'
});
pool.getConnection((err,connection)=>{
  if(err) throw err;
  let sql='select ename, hiredate from scott.emp order by hiredate';
  connection.query(sql,(err,results,fields)=>{
    if(err) throw err;
    console.log(results);
  })
})