/*

录屏大师  永久会员
https://apps.apple.com/cn/app/id1460570198

[Script]
录屏大师 = type=http-response,requires-body=1,pattern=^https?:\/\/luping\.cushuikeji\.cn\/api\/v\d\.user\/info,script-path=Script/lpds.js

[MITM]
hostname = luping.cushuikeji.cn
pattern = https://luping.cushuikeji.cn/api/v1.user/info

*/

var obj = JSON.parse($response.body);
obj.result.vip_type = 1,
obj.result.vip_grade = 1,
obj.result.vip_end_time = "2121-01-01",
obj.result.is_vip = 1,
obj.result.permanent_vip = 1
$done({body: JSON.stringify(obj)});
