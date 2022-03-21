/*

樊登读书 @yy 2022-02-26

[Script]
樊登读书 = type=http-response,requires-body=1,pattern=^https:\/\/gateway\-api\.dushu365\.com\/(user\-orchestration\/user\/api\/v101\/userInfo|athena\-orchestration\-system\/app\/v100\/vipInfo|athena\-orchestration\-system\/web\/v100\/basicInfo),script-path=Script/fdds.js

[MITM]
hostname = gateway-api.dushu365.com
pattern = https://gateway-api.dushu365.com/user-orchestration/user/api/v101/userInfo
pattern = https://gateway-api.dushu365.com/athena-orchestration-system/app/v100/vipInfo
pattern = https://gateway-api.dushu365.com/athena-orchestration-system/web/v100/basicInfo

*/

const path1 = '/user-orchestration/user/api/v101/userInfo';
const path2 = '/athena-orchestration-system/app/v100/vipInfo';
const path3 = '/athena-orchestration-system/web/v100/basicInfo';

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1) {
  obj.data.isTrial = true;
}

if ($request.url.indexOf(path2) != -1) {
  obj.data = {
    "anonymous":false,
    "endTime":1847014399000,
    "joined":true,
    "openVIPTips":"免费畅听全馆好书，另享8大权益",
    "payUrl":"https://deeplink.dushu.io/link/index.html?opjump&viewrn&module@innovation/feifan.rn-pay",
    "rnPay":true,
    "skuId":200003795,
    "skuName":"非凡精读VIP",
    "startTime":1645799454533,
    "userStatus":1,
    "vipPrice":"388"
  };
}

if ($request.url.indexOf(path3) != -1) {
  obj.data.rightsEndTime = 1847014399000;
}

$done({body: JSON.stringify(obj)});
