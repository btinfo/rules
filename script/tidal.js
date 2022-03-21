/*

[Script]
tidal = type=http-response,requires-body=1,pattern=^https:\/\/api\.tidal\.com\/v1\/users\/186275981\/subscription\?,script-path=Script/tidal.js

[MITM]
hostname = api.tidal.com

*/

let obj = JSON.parse($response.body);
obj = {
  "startDate":"2022-03-15T08:00:08.248+0000",
  "validUntil":"2029-04-14T08:00:08.248+0000",
  "status":"ACTIVE",
  "subscription":{
    "type":"PREMIUM",
    "offlineGracePeriod":30
  },
  "highestSoundQuality":"HIGH",
  "premiumAccess":true,
  "canGetTrial":true,
  "paymentType":"EXTERNAL_CONTRACT_NO_VALIDATION"
};
$done({body: JSON.stringify(obj)});
