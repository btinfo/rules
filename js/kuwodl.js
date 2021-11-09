/*
酷我音乐 付费下载
ID: 842475874 (9.6.9)

***************************
[Script]
酷我下载 = type=http-request,pattern=^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid=\d+,script-path=kuwodl.js

[MITM]
hostname = musicpay.kuwo.cn

**************************/

let url = $request.url.replace(/uid=\d+/g, "uid=2");
$done({url});
