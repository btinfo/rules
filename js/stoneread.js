/*
石头阅读

***************************
[Script]
石头阅读 = type=http-response,requires-body=1,pattern=^https?:\/\/app\.qdstt\.cn\/api\/apiClient\/index,script-path=stoneread.js

[MITM]
hostname = app.qdstt.cn

**************************/

var body = $response.body;
var obj = JSON.parse(body);
obj.data["vvip"] = "1";
obj.data["vvip_deadline"] = "1835312949000";
obj.data["u_credits"] = "666666";
body = JSON.stringify(obj);
$done({body});
