/*
WPS Office 2
^https?:\/\/account\.wps\.cn\/api\/v3\/mine\/vips\?
hostname = account.wps.cn
*/

var body = JSON.parse($response.body);
var obj = {
  vip: {
    name: "超级会员",
    has_ad: 0,
    memberid: 40,
    expire_time: 1846256142,
    enabled: [
      { memberid: 40, name: "超级会员", expire_time: 1846256142 },
      { memberid: 20, name: "WPS会员", expire_time: 1846256142 },
      { memberid: 12, name: "稻壳会员", expire_time: 1846256142 }
    ]
  }
};

$done({ body: JSON.stringify(obj) });
