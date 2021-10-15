/*
^https?:\/\/gateway-api\.dushu365\.com\/user-orchestration\/(user\/api\/v101\/userInfo|user\/api\/v100\/ceiltip|userWeb\/appUser\/v100\/getUserByToken)
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/user-orchestration/user/api/v101/userInfo'
const tip = '/user-orchestration/user/api/v100/ceiltip'
const appUser = '/user-orchestration/userWeb/appUser/v100/getUserByToken'

if (url.indexOf(vip) != -1) {
  obj.data.userStatus = 3;
  obj.data.expire_time = 2012745599000
  obj.data.isTrial = false
  obj.data.userRoleCode = '11'
  obj.data.vipBeginTime = 1523980800000
  body = JSON.stringify(obj);
}

if (url.indexOf(appUser) != -1) {
  obj.data.expireTime = 2012745599000
  obj.data.isTrial = false
  obj.data.userStatus = 3
  obj.data.userRoleCode = '11'
  body = JSON.stringify(obj);
}

if (url.indexOf(tip) != -1) {
  obj.data.buttonTip = ''
  obj.data.descTip = ''
  obj.data.empty = true
  body = JSON.stringify(obj);
}

$done({ body });
