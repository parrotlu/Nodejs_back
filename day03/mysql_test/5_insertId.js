const mysql=require('mysql');

let pool=mysql.createPool({
  connectionLimit:10,
  user:'root'
})
pool.getConnection((err,connection)=>{
  if(err) throw err;
  let sql='INSERT INTO scott.test VALUES (null,?,?)';
  connection.query(sql,['Jerry','456'],(err,results,fields)=>{
    if(err) throw err;
    console.log(results.affectedRows);
    console.log(results.insertId);
  })
})