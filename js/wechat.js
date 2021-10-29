// ^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad

var body = $response.body;
var obj = JSON.parse(body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
body = JSON.stringify(obj);
$done({body});
