const mysql=require('mysql');
let connetion=mysql.createConnection({
  user:'root',
  password:''
})
connetion.connect((err)=>{
  if(err) throw err;
  // console.log(connetion.threadId);
  let sql='INSERT INTO xz.xz_user VALUES (null, ?,?,?,?,?,?,?,?)'
connetion.query(sql,['a','b','c','d','e','f','g','h'],(err,results,fields)=>{
  if(err) throw err;
  console.log(results);
})
})

/*
connetion.query('SELECT * FROM xz.xz_user',(err,result,fields)=>{
  if(err) throw err;
  console.log(result);
})
*/

