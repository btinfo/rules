// https://api.linfeicloud.com/(account/getaccount|File/GetFileList)

var body = $response.body;
var obj = JSON.parse(body);
obj.Data.NoAds = 1;
obj.Data.Days = 365;
obj.Data.ASRTime = 30000;
obj.Data.VIP = 1;
obj.Data.VIP = 1;
body = JSON.stringify(obj);
$done({body});
