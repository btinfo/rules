/*

酷我音乐 豪华VIP
VESION: 9.6.9
ID: 842475874
https://apps.apple.com/cn/app/id588673713

[Script]
酷我 = type=http-response,requires-body=1,pattern=^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice),script-path=Script/kuwo.js

[MITM]
hostname = vip1.kuwo.cn
pattern = https://vip1.kuwo.cn/vip/v2/user/vip
pattern = https://vip1.kuwo.cn/vip/spi/mservice

*/

const path1 = '/vip/v2/user/vip';
const path2 = '/vip/spi/mservice';

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1) {
  obj.data.isNewUser = 2,
  obj.data.vipLuxuryExpire = 1835312949000,
  obj.data.time = 1961170340993,
  obj.data.isYearUser = 2,
  obj.data.vipmExpire = 1835312949000,
  obj.data.vipOverSeasExpire = 1835312949000,
  obj.data.vipExpire = 1835312949000,
  obj.data.vip3Expire = 1835312949000
}

if ($request.url.indexOf(path2) != -1) {
  obj.isVIPMAutoPay = 2,
  obj.isVIPLuxAutoPay = 2
}

$done({body: JSON.stringify(obj)});
