/*

威锋 VIP @yy 2021-10-30
https://apps.apple.com/cn/app/id1411932809

[Script]
威锋 = type=http-response,requires-body=1,pattern=^https?:\/\/api\.wfdata\.club\/v1\/user\/homePageInfo,script-path=Script/feng.js

[MITM]
hostname = api.wfdata.club
pattern = https://api.wfdata.club/v1/user/homePageInfo

*/

let obj = JSON.parse($response.body);
obj.data.userBaseInfo.vipExpiryDate = "2029-12-31 23:59:59";
obj.data.userBaseInfo.isVip = true;
$done({body: JSON.stringify(obj)});
