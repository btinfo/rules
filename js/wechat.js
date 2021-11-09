/*
微信公众号广告

***************************
[Rule]
DOMAIN,wxsnsdythumb.wxs.qq.com,REJECT
DOMAIN,wxsnsdy.wxs.qq.com,REJECT

[Script]
微信公众号广告 = type=http-response,requires-body=1,pattern=^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad,script-path=wechat.js

[MITM]
hostname = mp.weixin.qq.com

**************************/

var body = $response.body;
var obj = JSON.parse(body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
body = JSON.stringify(obj);
$done({body});
