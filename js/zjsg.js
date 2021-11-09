/*
@2021-11-08
指尖时光

***************************
[Script]
指尖时光 = type=http-response,requires-body=1,pattern=^https:\/\/integral\.dasyibalang\.com\/User\?,script-path=zjsg.js

[MITM]
hostname = integral.dasyibalang.com

**************************/

var body = $response.body;
var obj = JSON.parse(body);
obj.data["VIP"] = 1;
body = JSON.stringify(obj);
$done({body});
