/*
微信听书
^https?:\/\/i\.at\.qq\.com\/pay\/memberinfo
*/

let obj = JSON.parse($response.body);
obj = {
  "isMember": 1,
  "isAutoRenewable": 1,
  "startTime": 1612600608,
  "endTime": 4092647115,
  "autoRenewableChannel": 0,
  "autoRenewableTime": 0,
  "expiresIn": 999999999,
  "subscriptionPeriod": 1,
  "subscriptionPrice": 999999,
  "historyAutoRenewable": true,
  "hasPromoRight": false,
  "subscriptionDesc": "永久会员",
  "subscriptionButtonLabel": ""
 };
$done({body: JSON.stringify(obj)});

