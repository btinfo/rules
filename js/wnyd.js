/*
网易蜗牛阅读
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json
*/

var body = $response.body;
var obj = JSON.parse(body);
obj.tradeEndTime = 1679685290000;
body = JSON.stringify(obj);
$done({body});
