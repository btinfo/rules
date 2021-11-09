/*
中国体育直播

***************************
[Script]
中国体育直播 = type=http-response,requires-body=1,pattern=^http:\/\/rest\.zhibo\.tv\/room\/get\-room\-info\-v430,script-path=zgtyzb.js

[MITM]
hostname = rest.zhibo.tv

**************************/

const path1 = "/room/get-room-info-v430";
let obj = JSON.parse($response.body);
if ($request.url.indexOf(path1) != -1){
	obj.data.anchor["userHas"] = "1";	
}
$done({body: JSON.stringify(obj)});
