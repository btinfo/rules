/*
type=http-request,pattern=^https?:\/\/musicpay\.kuwo.cn\/music\.pay\?uid=\d+
*/
let url = $request.url.replace(/uid=\d+/g, "uid=2");
$done({url});
