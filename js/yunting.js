/*
云听

***************************
[Script]
云听 = type=http-response,requires-body=1,pattern=^http:\/\/(getway\.radio\.cn|39\.106\.98\.80)\/app*,script-path=yunting.js

[MITM]
hostname = getway.radio.cn, 39.106.98.80

**************************/

var body = $response.body.replace(/\u0069\u0073\u0056\u0069\u0070\u0022\u003A\u0031/g, '\u0069\u0073\u0056\u0069\u0070\u0022\u003A\u0030');
$done({ body });
