/*
@2021-11-01
小猿口算VIP

***************************
[Script]
小猿口算 = type=http-response,requires-body=1,pattern=^https:\/\/xyks\.yuanfudao\.com\/leo\-alchemy\-account\/(iphone|api)\/vip\/user\/info\?,script-path=leo.js

[MITM]
hostname = xyks.yuanfudao.com

**************************/

var body = $response.body;
var obj = JSON.parse(body);
obj["vipSymbol"] = true;
//obj["userVIPInfo"] = "null";
obj["vipHistory"] = true;
body = JSON.stringify(obj);
$done({body});
