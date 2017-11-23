const mysql=require('mysql');

let pool=mysql.createPool({
  connectionLimit:10,
  user:'root'
});
pool.getConnection((err,connection)=>{
  if(err) throw err;
  let sql='select e.ename,d.dname from scott.emp e inner join scott.dept d on e.deptno=d.deptno';
  connection.query(sql,(err,results,fields)=>{
    if(err) throw err;
    console.log(results);
  })
})