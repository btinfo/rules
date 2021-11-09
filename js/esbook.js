/*
@2021-11-03
宜搜小说

***************************
[Script]
宜搜小说 = type=http-response,requires-body=1,pattern=^http:\/\/api\.ieasou\.com\/api\/bookapp\/(balance|chargeChapter)\.m,script-path=esbook.js

[MITM]
hostname = api.ieasou.com

**************************/

const path1 = "/bookapp/balance";
const path2 = "/bookapp/chargeChapter";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.balance = 99999;
obj.charge = true;

obj.vipInfo["vip"] = true;
obj.vipInfo["vipStatus"] = 1;
obj.vipInfo["autoTime"] = 1;
obj.vipInfo["expireTime"] = 1914123030;

obj.freeInfo["freePrivilege"] = true;
obj.freeInfo["expireTime"] = 1914123030;

obj.success = "true";
}

if ($request.url.indexOf(path2) != -1){
obj.success = "true";
obj.charge = 0;
obj.paid = 1;
obj.accelerate = 1;

obj.vipInfo["vip"] = "true";
obj.vipInfo["vipStatus"] = 1;
obj.vipInfo["autoTime"] = 1;
obj.vipInfo["expireTime"] = 1914123030;

obj.freeInfo["freePrivilege"] = "true";
obj.freeInfo["expireTime"] = 1914123030;

obj.excPrice["status"] = 1;

obj.payInfo["balance"] = 99999;
obj.payInfo["discount"] = 100.0;

obj.activity["discount"] = 1;
obj.activity["activityType"] = 0;
 }
$done({body: JSON.stringify(obj)});
