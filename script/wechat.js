/*

微信 公众号广告
https://apps.apple.com/cn/app/id414478124

[Rule]
DOMAIN,wxsnsdythumb.wxs.qq.com,REJECT
DOMAIN,wxsnsdy.wxs.qq.com,REJECT

[Script]
微信公众号广告 = type=http-response,requires-body=1,pattern=^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad,script-path=Script/wechat.js

[MITM]
hostname = mp.weixin.qq.com
pattern = https://mp.weixin.qq.com/mp/getappmsgad

*/

let obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)});
