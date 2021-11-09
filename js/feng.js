/*
@2021-10-30
威锋VIP

***************************
[Script]
威锋 = type=http-response,requires-body=1,pattern=^https?:\/\/api\.wfdata\.club\/v1\/user\/homePageInfo,script-path=feng.js

[MITM]
hostname = api.wfdata.club

**************************/

var body = $response.body;
var obj = JSON.parse(body);
obj.data.userBaseInfo["vipExpiryDate"] = "2029-12-31 23:59:59";
obj.data.userBaseInfo["isVip"] = true;
body = JSON.stringify(obj);
$done({body});
