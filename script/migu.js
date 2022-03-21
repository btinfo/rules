/*

咪咕 体验会员

[Script]
咪咕体验会员 = type=http-response,requires-body=1,pattern=^https:\/\/v\.miguvideo\.com\/(ability\/v2\/member\-info|ability\/v2\/indexContract|videoActivity\/getUserActivityTags)\?,script-path=Script/migu.js

[MITM]
hostname = v.miguvideo.com
https://v.miguvideo.com/ability/v2/member-info?
https://v.miguvideo.com/ability/v2/indexContract?
https://v.miguvideo.com/videoActivity/getUserActivityTags?
*/

const path1 = '/ability/v2/member-info';
const path2 = '/ability/v2/indexContract';
const path3 = '/videoActivity/getUserActivityTags';

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1) {
obj.body = {
  "memberInfo":{
    "memberInfo":{
      "type":"trial",
      "term":"2029-03-10 12:14:30",
      "rights":{
        "isUfc":false,
        "skipBeforeAd":false,
        "isZuqiuvip":false,
        "isDiamond":false,
        "isVip":true,
        "isNba":false
      },
      "title":"体验会员",
      "memberGroup":"1",
      "icons":"trial",
      "iconsDetail":{
        "personalCenterIcon":"https://img.cmvideo.cn/publish/noms/2021/10/12/1O334R592LJMK.png",
        "teamBorderIcon":"https://img.cmvideo.cn/publish/noms/2020/05/25/1O25B1UFNPH14.png",
        "badgeIcon":"https://img.cmvideo.cn/publish/noms/2020/05/25/1O25B1UF5P0E9.png",
        "personalInfoIcon":"https://img.cmvideo.cn/publish/noms/2020/05/27/1O25B7ONKT8QT.png",
        "barrageIcon":"https://img.cmvideo.cn/publish/noms/2020/05/25/1O25B1UCOQGAP.png",
        "smallIcon":"https://img.cmvideo.cn/publish/noms/2020/05/25/1O25B1UBTAF00.png"
      },
      "extra":""
    },
    "benefitsInfo":{
      "1080p":"2029-03-10 12:14:30",
      "720p":"2029-03-10 12:14:30",
      "replay-7-days":"2029-03-10 12:14:30",
      "high-resolution":"2029-03-10 12:14:30",
      "ad-skip-5-seconds":"2029-03-10 12:14:30",
      "vip":"2029-03-10 12:14:30",
      "dolby":"2029-03-10 12:14:30"
    },
    "memberTerm":{
      "trial":"2029-03-10 12:14:30"
    }
  },
  "resultCode":"SUCCESS"
};
}

if ($request.url.indexOf(path2) != -1) {
obj.body = {
  "indexMember":{
    "rightsDescription":"享会员片库、直播7天回看、VIP专属下载等会员权益。",
    "serialNumber":2,
    "sealedFlag":"0",
    "timesFlag":"1",
    "identityIconUrl":"http://img.cmvideo.cn:8080/publish/noms/2019/10/18/1O1AACVK3GNL7.png",
    "memberName":"体验会员",
    "assetType":"member",
    "expireTime":"2029-03-10 12:14:30",
    "rightsCopywriting":"无通看券赠送权益哦",
    "cardImg":"",
    "expiredCardImg":"",
    "iconUrl":"http://img.cmvideo.cn:8080/publish/noms/2019/10/18/1O1AACVSQ6SQI.png",
    "id":"5da5614dd79302d926350525",
    "memberType":"trial",
    "expiredIdentityIconUrl":"http://img.cmvideo.cn:8080/publish/noms/2019/10/18/1O1AACVOAGMPR.png",
    "effectiveFlag":"1"
  }
};
}

if ($request.url.indexOf(path3) != -1) {
obj = {
  "resultCode":"ACCEPTED",
  "globalParams":{
    "frequency":300
  },
  "userTagsInfo":{
    "miguvideo_memberType":"trial",
    "miguvideo_loginActiveUser30":"true",
    "common_carrierProvince":"100",
    "miguvideo_launchActiveUser30":"true",
    "miguvideo_longVideoFirstLevel":"体育",
    "common_carrier":"cucc",
    "common_ipProvince":"311",
    "miguvideo_operationx_Tag-20220212-7PvV8":"null",
    "miguvideo_voucherAutoExchanged":"null",
    "miguvideo_continuousMonthlyIsOrdered":"null"
  }
};
}

$done({body: JSON.stringify(obj)});
