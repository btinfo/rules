/* https://raw.githubusercontent.com/yqc007/QuantumultX/master/BackgroundEraserProCrack.js

傲软抠图 @2022-03-10
https://apps.apple.com/cn/app/id1490054676

[Script]
傲软抠图 = type=http-response,requires-body=1,pattern=^https?:\/\/gw\.aoscdn\.com\/base\/vip\/client\/authorizations$,script-path=Script/apowersoft.js

[MITM]
hostname = gw.aoscdn.com
pattern = https://gw.aoscdn.com/base/vip/client/authorizations

*/

let obj = JSON.parse($response.body);
obj.data.is_activated = 1;
obj.data.remain_days = 666666;
obj.data.will_expire = 0;
obj.data.vip_special = 1;
obj.data.is_lifetime = 1;
obj.data.expired_at = 32495475600;
obj.data.expire_time = "2999-09-28";
$done({body: JSON.stringify(obj)});
