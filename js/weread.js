/*
微信读书 5.5.1

***************************
[Script]
微信读书 = type=http-response,requires-body=1,pattern=^https:\/\/i\.weread\.qq\.com\/(pay\/balance|pay\/memberCardSummary),script-path=weread.js

[MITM]
hostname = i.weread.qq.com

**************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const path1 = "/pay/balance"
const path2 = "/pay/memberCardSummary"
if (url.indexOf(path1) != -1) {
  obj.balance = 99999999;
  body = JSON.stringify(obj);
}
if (url.indexOf(path2) != -1) {
  obj.expiredTime = 2302963199;
  obj.expired = 0
  obj.permanent = 1
  obj.remainTime = 9999999999
  obj.savedMoney = 9999999
  body = JSON.stringify(obj);
}
$done({body});
