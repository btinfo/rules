/* https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/ft.js

FT中文网 高端会员 @yy 2022-03-05
https://apps.apple.com/cn/app/id443870811

[Script]
FT中文网 = type=http-response,requires-body=1,pattern=^https:\/\/dqbam2jv6gg9m\.cloudfront\.net\/index\.php\/jsapi\/paywall,script-path=Script/ft.js

[MITM]
hostname = dqbam2jv6gg9m.cloudfront.net
pattern = https://dqbam2jv6gg9m.cloudfront.net/index.php/jsapi/paywall

*/

let obj = JSON.parse($response.body);
obj = {
  "paywall":0,
  "premium":1,
  "standard":1,
  "addon":0,
  "expire":4102415999,
  "v":1994,
  "campaign_code":"",
  "latest_duration":"yearly"
};
$done({body: JSON.stringify(obj)});
