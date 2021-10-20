var body = $response.body;
var obj = JSON.parse(body);
obj.data.vipInfo.opType = 3;
obj.data.vipInfo.isVas = 1;
body = JSON.stringify(obj);
$done({body});
