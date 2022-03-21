/*

Reddit Promoted
https://apps.apple.com/us/app/id1064216828

[Script]
Reddit = type=http-response,requires-body=true,pattern=^https?:\/\/oauth\.reddit\.com\/api\/v1\/me\/prefs\.json,script-path=Script/reddit.js

[MITM]
hostname = oauth.reddit.com
pattern = https://oauth.reddit.com/api/v1/me/prefs.json

*/

var obj = JSON.parse($response.body); 
obj["third_party_site_data_personalized_ads"] = false;
obj["hide_ads"] = true;
obj["activity_relevant_ads"] = false;
obj["third_party_data_personalized_ads"] = false;
$done({body: JSON.stringify(obj)});
