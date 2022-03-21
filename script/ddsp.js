/*

多多视频 @yy 2021-12-03
https://apps.apple.com/cn/app/id1595834306

[Script]
多多视频广告 = type=http-response,requires-body=1,pattern=^https:\/\/api\.rr\.tv\/ad\/getAll,script-path=Script/ddsp.js

[MITM]
hostname = api.rr.tv
pattern = https://api.rr.tv/ad/getAll

*/

let obj = JSON.parse($response.body);
obj.data.adList = [];
$done({body: JSON.stringify(obj)});
