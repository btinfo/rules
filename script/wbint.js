/*

微博国际版 时间线广告 (by hancj0528)
https://apps.apple.com/cn/app/id1215210046

[URL Rewrite]
^https?:\/\/weibointl\.api\.weibo\.cn\/portal\.php\?a=get_coopen_ads - reject-tinygif

[Script]
微博国际版广告 = type=http-response,requires-body=1,pattern=^https?:\/\/api\.weibo\.cn\/2\/(statuses|groups)\/(unread_hot_|friends_)?timeline,script-path=Script/wbint.js

[MITM]
hostname = weibointl.api.weibo.cn, api.weibo.cn
pattern = https://api.weibo.cn/2/(statuses|groups)/(unread_hot_|friends_)?timeline

*/

let body = JSON.parse($response.body);
if (body["ad"]) body["ad"] = [];
if (body["advertises"]) body["advertises"] = [];
if (body["statuses"] && body["statuses"].length > 0) {
  let i = body["statuses"].length;
  while (i--) {
    if (body["statuses"][i]["ad_state"]) { 
      delete body["statuses"][i];
    }
  }
}
$done({ body: JSON.stringify(body) });
