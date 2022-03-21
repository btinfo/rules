/* https://raw.githubusercontent.com/yqc007/QuantumultX/master/WallCraftFProCrack.js

Wallcraft 专业版 一次性解锁
https://apps.apple.com/cn/app/id1348676585

[Script]
Wallcraft = type=http-response,requires-body=1,pattern=^https?:\/\/billing-ios\.wallpaperscraft\.com\/verify_receipt\/remove_ads$,script-path=Script/wallcraft.js,enable=false

[MITM]
hostname = *.wallpaperscraft.com
pattern = https://billing-ios.wallpaperscraft.com/verify_receipt/remove_ads

*/

var body = $response.body;
var objc = JSON.parse(body);

objc.items["all_time"] = {
    "type" : "nonconsumable",
    "is_active" : true
};

body = JSON.stringify(objc);
$done({ body });
