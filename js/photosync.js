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
