/**
 * Created by web-01 on 2017/11/14.
 */
const util=require('util');

console.log(util.isArray('[]'));
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));

console.log(util.isDate(new Date()));
console.log(util.isDate('2017-11-14'));
console.log(util.isDate(new Date(123456789)));

console.log(util.isRegExp(new RegExp()));
console.log(util.isRegExp(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2}$/i));
console.log(util.isRegExp({}));

console.log(util.isError(new Error()));
console.log(util.isError(new TypeError));
