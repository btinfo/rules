/*
^https?:\/\/app\.qdstt\.cn\/api\/apiClient\/index
*/

var body = $response.body;
var obj = JSON.parse(body);
obj.data["vvip"] = "1";
obj.data["vvip_deadline"] = "1835312949000";
obj.data["u_credits"] = "666666";
body = JSON.stringify(obj);
$done({body});
