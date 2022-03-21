/*

AppRaven Premium @yy 2022-02-28

[Script]
AppRaven = type=http-response,requires-body=1,pattern=^https:\/\/appraven\.net\/AppRaven\/(app\?t=up|users\?|social\?|app\?t=sn\&qt=iap),script-path=Script/appraven.js

[MITM]
hostname = appraven.net

*/

const path1 = '/AppRaven/app?t=up';
const path2 = '/AppRaven/social';
const path3 = '/AppRaven/users';
const path4 = '/AppRaven/app?t=sn&qt=iap';

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1) {
  obj["premium"] = true;
}

if ($request.url.indexOf(path2) != -1) {
  obj["premium"] = true;
}

if ($request.url.indexOf(path3) != -1) {
  obj["value"] = true;
}

if ($request.url.indexOf(path4) != -1) {
  obj = {
    "success":true,
    "code":0
    //"message":""
  };
}

$done({body: JSON.stringify(obj)});
