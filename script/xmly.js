/*

喜马拉雅极速版 @yy 2022-02-28

[Script]
喜马拉雅极速版 = type=http-response,requires-body=1,pattern=^http:\/\/(mobwsa\.ximalaya\.com|27\.185\.240\.192)\/fmobile\-user\/homePage\/ts\-,script-path=Script/xmly.js

[MITM]
hostname = mobwsa.ximalaya.com,27.185.240.192
pattern = http://mobwsa.ximalaya.com/fmobile-user/homePage/ts-
pattern = http://27.185.240.192/fmobile-user/homePage/ts-

*/

let obj = JSON.parse($response.body);
obj.vipViewInfo.vipStatus = 0;
obj.isVip = true;
$done({body: JSON.stringify(obj)});
