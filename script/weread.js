/*

微信读书
VERSION: 5.5.1
ID: 843025985
https://apps.apple.com/cn/app/id952059546

[Script]
微信读书 = type=http-response,requires-body=1,pattern=^https:\/\/i\.weread\.qq\.com\/(pay\/balance|pay\/memberCardSummary),script-path=Script/weread.js

[MITM]
hostname = i.weread.qq.com
pattern = https://i.weread.qq.com/pay/balance
pattern = https://i.weread.qq.com/pay/memberCardSummary

*/

const path1 = '/pay/balance';
const path2 = '/pay/memberCardSummary';

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1) {
obj.balance = 99999999;
}

if ($request.url.indexOf(path2) != -1) {
obj.expiredTime = 2302963199;
obj.expired = 0;
obj.permanent = 1;
obj.remainTime = 9999999999;
obj.savedMoney = 9999999;
}

$done({body: JSON.stringify(obj)});
