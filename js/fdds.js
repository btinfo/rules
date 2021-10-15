/*
^https:\/\/gateway-api\.dushu365\.com\/user-orchestration\/user\/api\/v101\/userInfo
*/

var body = $response.body;
var obj = JSON.parse(body);
obj.data["expire_time"] = "1679685290000";
obj.data["isTrial"] = "false";
obj.data["is_vip"] = "true";
body = JSON.stringify(obj);
$done({body});

