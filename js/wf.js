// ^https?:\/\/api\.wfdata\.club\/v1\/user\/homePageInfo

var body = $response.body;
var obj = JSON.parse(body);
obj.data.userBaseInfo["vipExpiryDate"] = "2029-12-31 23:59:59";
obj.data.userBaseInfo["isVip"] = true;
body = JSON.stringify(obj);
$done({body});
