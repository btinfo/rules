/* https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/photosync.js

PhotoSync Premium
https://apps.apple.com/cn/app/id415850124

[Script]
PhotoSync = type=http-response,requires-body=1,pattern=^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/\$RCAnonymousID%3Ab1a44068489e4667a54f7c2197a4c905,script-path=Script/photosync.js

[MITM]
hostname = api.revenuecat.com
pattern = https://api.revenuecat.com/v1/subscribers/$RCAnonymousID

*/

let obj = JSON.parse($response.body);
obj.current_offering_id = "premium_yearly_cross";
obj.subscriber.entitlements = {
  "premium":{
    "expires_date":"2029-06-01T13:49:38Z",
    "product_identifier":"com.touchbyte.PhotoSync.PremiumYearly",
    "purchase_date":"2020-05-18T13:49:38Z"
  }
};
obj.subscriber.subscriptions = {
  "com.touchbyte.PhotoSync.PremiumYearly":{
    "billing_issues_detected_at":null,
    "expires_date":"2029-06-01T13:49:38Z",
    "is_sandbox":false,
    "original_purchase_date":"2020-05-18T13:49:41Z",
    "period_type":"trial",
    "purchase_date":"2020-05-18T13:49:38Z",
    "store":"app_store",
    "unsubscribe_detected_at":null
  }
};
$done({body: JSON.stringify(obj)});
