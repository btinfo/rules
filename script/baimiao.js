/*

白描 黄金会员
https://apps.apple.com/cn/app/id1249901692

[Script]
白描 = type=http-response,requires-body=1,pattern=^https?:\/\/baimiao\.uzero\.cn\/api\/v\d\.user\/appLaunchWithUser,script-path=Script/baimiao.js

[MITM]
hostname = baimiao.uzero.cn
pattern = https://baimiao.uzero.cn/api/v1.user/appLaunchWithUser

*/

let obj = JSON.parse($response.body);
obj.value.vip = {
  "id":999999,
  "userId":9999999,
  "levelId":2,
  "deadline":9999986324,
  "boughtType":"new",
  "boughtTime":1586253524,
  "boughtDuration":10,
  "boughtUnit":"year",
  "boughtAmount":30,
  "orderId":999999,
  "deadlineNotified":0,
  "operatorId":0,
  "createdTime":1586253524,
  "level":{
    "id":2,
    "seq":2,
    "name":"\u9ec4\u91d1\u4f1a\u5458",
    "icon":"",
    "picture":"",
    "monthPrice":0.02,
    "yearPrice":30,
    "description":"",
    "recognizeNormal":-100,
    "recognizeBatch":-100,
    "recognizeTranslate":-100,
    "recognizeTranslateAll":1,
    "enabled":1,
    "gived":0,
    "createdTime":1429260383,
    "maxRate":100
  }
};  
$done({body: JSON.stringify(obj)});
