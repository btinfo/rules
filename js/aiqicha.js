/*
爱企查

***************************
[Script]
爱企查 = type=http-response,requires-body=1,pattern=^https:\/\/aiqicha\.baidu\.com\/usercenter\/getvipinfoAjax,script-path=aiqicha.js

[MITM]
hostname = aiqicha.baidu.com

**************************/

let obj = JSON.parse($response.body);
  obj.data = {
    "vip": 1,
    "consume": 150,
    "time": "2029-12-31",
    "signInStaus": 0
  }
$done({body: JSON.stringify(obj)});
