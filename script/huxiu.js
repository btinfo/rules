/*

虎嗅 顶部 banner及时间线广告 @yy 2021-11-27
https://apps.apple.com/cn/app/id557509598

[Script]
虎嗅广告 = type=http-response,requires-body=1,pattern=^https:\/\/api-ad-product\.huxiu\.com\/Api\/Product\/SDK\/Advert\/Query\/queryAdvertListInfo,script-path=Script/huxiu.js

[MITM]
hostname = api-ad-product.huxiu.com
pattern = https://api-ad-product.huxiu.com/Api/Product/SDK/Advert/Query/queryAdvertListInfo

*/

let obj = JSON.parse($response.body);
obj.data.advertListInfo = [];
$done({body: JSON.stringify(obj)});
