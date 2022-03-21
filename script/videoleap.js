/*

videoleap @yy 2022-03-04

[Script]
Videoleap = type=http-response,requires-body=1,pattern=^https:\/\/api\.lightricks\.com\/subscription,script-path=Script/videoleap.js

[MITM]
hostname = api.lightricks.com
pattern = https://api.lightricks.com/subscription

*/

let obj = JSON.parse($response.body);
obj = {
  "fullRefundDateMs":null,
  "isExpired":false,
  "latestExpirationDateMs":3660814771000,
  "latestProductId":"com.lightricks.EnlightVideo_V2.PJ.1Y.SA_1Y.ES",
  "latestPurchaseDateMs":1629278771000,
  "latestTransactionId":"700000844205775",
  "originalPurchaseDateMs":1608376408000,
  "originalTransactionId":"700000801682988",
  "pendingRenewalInfo":{
    "expirationIntent":null,
    "isAutoRenewEnabled":false,
    "nextProductId":"com.lightricks.EnlightVideo_V2.PJ.1Y.SA_1Y.ES"
  }
};
$done({body: JSON.stringify(obj)});
