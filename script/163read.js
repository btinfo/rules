/*

网易蜗牛读书 Turbo会员
https://apps.apple.com/cn/app/id1127249355

[Script]
网易蜗牛读书 = type=http-response,requires-body=1,pattern=^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json,script-path=Script/163read.js

[MITM]
hostname = p.du.163.com
pattern = https://p.du.163.com/gain/readtime/info.json

*/

let obj = JSON.parse($response.body);
obj.tradeEndTime = 1679685290000;
$done({body: JSON.stringify(obj)});
