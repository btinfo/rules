/*
酷我音乐 解锁会员
ID: 842475874 (9.6.9)

***************************
[Script]
酷我 = type=http-response,requires-body=1,pattern=^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice),script-path=kuwo.js

[MITM]
hostname = vip1.kuwo.cn

**************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const path1 = '/vip/v2/user/vip';
const path2 = '/vip/spi/mservice';

if (url.indexOf(path1) != -1) {
	obj.data["isNewUser"] = "2";
	obj.data["vipLuxuryExpire"] = "1835312949000";
	obj.data["time"] = "1961170340993";
	obj.data["isYearUser"] = "2";
	obj.data["vipmExpire"] = "1835312949000";
	obj.data["vipOverSeasExpire"] = "1835312949000";
	obj.data["vipExpire"] = "1835312949000";
	obj.data["vip3Expire"] = "1835312949000";
	body = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1) {
	obj["isVIPMAutoPay"] = 2;
	obj["isVIPLuxAutoPay"] = 2;
	body = JSON.stringify(obj);
}

$done({body});
