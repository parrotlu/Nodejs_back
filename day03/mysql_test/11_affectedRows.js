const mysql=require('mysql');
let pool=mysql.createPool({
  connectionLimit:10,
  user:'root'
});
pool.getConnection((err,connection)=>{
  if(err) throw err;
  let sql='INSERT INTO scott.test (username,password) VALUES ?';
  connection.query(sql,[[['user1','pass1'],['user2','pass2'],['user3','pass3']]],(err,results,fields)=>{
    if(err) throw err;
    console.log(results);
    console.log(results.affectedRows);
  })
})