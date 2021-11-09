/*
网易蜗牛读书 Turbo会员 by yxiaocai & JO2EY

***************************
[Script]
蜗牛读书 = type=http-response,requires-body=1,pattern=^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json,script-path=snailread.js

[MITM]
hostname = p.du.163.com

**************************/

var body = $response.body;
var obj = JSON.parse(body);
obj.tradeEndTime = 1679685290000;
body = JSON.stringify(obj);
$done({body});
