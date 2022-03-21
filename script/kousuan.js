/*

小猿口算 VIP @yy 2021-11-01
https://apps.apple.com/cn/app/id1325419855

[Script]
小猿口算 = type=http-response,requires-body=1,pattern=^https:\/\/xyks\.yuanfudao\.com\/leo\-alchemy\-account\/(iphone|api)\/vip\/user\/info\?,script-path=Script/kousuan.js

[MITM]
hostname = xyks.yuanfudao.com
pattern = https://xyks.yuanfudao.com/leo-alchemy-account/iphone/vip/user/info?
pattern = https://xyks.yuanfudao.com/leo-alchemy-account/api/vip/user/info?

let obj = JSON.parse($response.body);
obj.vipSymbol = true;
//obj.userVIPInfo = null;
obj.vipHistory = true;
obj.studyGroupRightInfo = {
  "rightStatus":1,
  "rightEndTime":"2029-12-31"
};
$done({body: JSON.stringify(obj)});

*/

let obj = JSON.parse($response.body);
obj.vipSymbol = true;
obj.vipHistory = true;
$done({body: JSON.stringify(obj)});
