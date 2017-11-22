const qs=require('querystring');
let str='menuId=597802&version=WEB_N_V03&period=%E5%8C%85%E5%92%8CNPM%E3%80%81Node.js+%E7%9A%84%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97';
console.log(qs.parse(str));

let json={menuId: '597802',
  version: 'WEB_N_V03',
  period: '包和NPM、Node.js 的核心模块' };
console.log(qs.stringify(json));