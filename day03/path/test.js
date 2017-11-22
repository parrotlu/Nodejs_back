/**
 * Created by web-01 on 2017/11/14.
 */
const path=require('path');
console.log(path.normalize('/test1//test2')); //标准化
console.log(path.join(__dirname,'../test1/test2','test3/test4')); //路径拼接
console.log(path.resolve('./test.js'));  //绝对路径
console.log(path.isAbsolute('./test.js')); //是否是绝对路径
console.log(path.isAbsolute(__filename));
console.log(path.extname(__filename)); //扩展名