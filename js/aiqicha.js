/*
爱企查vip
^https:\//aiqicha.baidu.com\/usercenter\/getvipinfoajax url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/aiqicha.js
mitm= aiqicha.baidu.com
*/

var body = $response.body;
var obj = JSON.parse(body);
obj.data.vip = 1;
obj.data.consume = 150;
obj.data.time = 2029-12-31;
obj.data.signInStaus = 0;
body = JSON.stringify(obj);
$done({body});
