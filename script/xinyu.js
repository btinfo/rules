/* https://raw.githubusercontent.com/yqc007/QuantumultX/master/XinYuLibraryProCrack.js

新语听书 年会员
https://apps.apple.com/cn/app/id1397442018

[Script]
新语听书  = type=http-response,requires-body=1,pattern=^https?:\/\/i\.xinyulib\.com\.cn\/api\/querytoken.+,script-path=Script/xinyu.js

[MITM]
hostname = i.xinyulib.com.cn
pattern = https://i.xinyulib.com.cn/api/querytoken.+

*/

let obj = JSON.parse($response.body);
obj.data.vipstartTime = "2020-09-28";
obj.data.vipendtime = "2999-09-28";
$done({body: JSON.stringify(obj)});
