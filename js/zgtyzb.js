/*
中国体育直播 unlock 
QX:

[rewrite_local]👇

http:\/\/rest\.zhibo\.tv\/room\/get\-pull\-stream\-info\-v430 url script-response-body zgtyzb.js


MITM = rest.zhibo.tv

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/room/get-pull-stream-info-v430'

if (url.indexOf(vip) != -1) {
  obj.data.userHas = 1;
  obj.data.onTrial = false
  body = JSON.stringify(obj);
}

$done({ body });
