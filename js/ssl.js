// https://api.linfeicloud.com/account/getaccount

var body = $response.body;
var obj = JSON.parse(body);
obj.Data.VIP = 1;
body = JSON.stringify(obj);
$done({body});
