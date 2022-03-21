/*

微信听书
VERSION: 1.0.18
ID: 842530423
https://apps.apple.com/cn/app/id1522424583

[Script]
微信听书 = type=http-response,requires-body=1,pattern=^https?:\/\/i\.at\.qq\.com\/pay\/memberinfo,script-path=Script/wehear.js

[MITM]
hostname = i.at.qq.com
pattern = https://i.at.qq.com/pay/memberinfo

*/

let obj = JSON.parse($response.body);
obj = {
  "isMember":1,
  "isAutoRenewable":1,
  "startTime":1612600608,
  "endTime":4092647115,
  "autoRenewableChannel":0,
  "autoRenewableTime":0,
  "expiresIn":999999999,
  "subscriptionPeriod":1,
  "subscriptionPrice":999999,
  "historyAutoRenewable":true,
  "hasPromoRight":false,
  "subscriptionDesc":"\u6c38\u4e45\u4f1a\u5458",
  "subscriptionButtonLabel":""
};
$done({body: JSON.stringify(obj)});
