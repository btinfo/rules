/* 

滴答清单 年费高级会员 @yy 2021-11-21
https://apps.apple.com/cn/app/id626144601

[Script]
滴答清单 = type=http-response,requires-body=1,pattern=^https:\/\/dida365\.com\/api\/v2\/user\/status,script-path=Script/ddlist.js

[MITM]
hostname = dida365.com
pattern = https://dida365.com/api/v2/user/status

*/

let obj = {
  "userId":"1011839821",
  "username":"wsrti3ty@user.dida365.com",
  "proEndDate":"2029-01-26T07:54:10.000+0000",
  "needSubscribe":false,
  "inboxId":"inbox1011839821",
  "teamUser":false,
  "activeTeamUser":false,
  "freeTrial":false,
  "ds":false,
  "pro":true,
  "proStartDate":"2018-12-26T07:54:10.000+0000"
};
$done({body:JSON.stringify(obj)});
