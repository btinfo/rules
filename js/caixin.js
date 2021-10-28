/*
var body = $response.body
  .replace('var isPay = document', 'var isPay = 1;  #')
  .replace('var articleProperties', 'var articleProperties2')
  .replace(/nickname\":\".*?\"/g, 'nickname\":\"已解锁\"')
  .replace('isFree\":\\d', 'isFree\":0')
  .replace('aType\":\\d', 'aType\":0')
  .replace('feeType\":\\d', 'feeType\":0')

$done({ body });

//mappsv5.caixin.com/\/articlev*

//gateway.caixin.com\/api\/ucenter\/appapi\/v1\/userinfo

//mappsv5.caixin.com/\/audioV1\/*

//course.caixin.com/\/expert.course\/course\/reserveapi\/*
*******************************************************************************/
/*
 ^https:\/\/mappsv5\.caixin\.com\/(index_page_v5|articlev5|channelv5)\/
 
"isFree":"1",
"need_login":"0",
"aType":"2",
"from_channel":"16,22",
"power":"1000,8",
"channel_name":"\u5065\u5eb7",
"icon_tag":"0",
"source_id":"101792465",
"app_id":"100",
"top":"1",
"ui_type":"2",
"comment_num":"1",
"pics":"https:\/\/imgs.caixin.com\/2021-10-27\/163533930676828.jpg",
"group":"A",
"product_code":["QZSF","PRO","PRO_LITE","DATABASE_BASIC"],
"fee_content_id":["100300000","101426574","101792465","77","401202509","401202158"]

var body = $response.body;
var obj = JSON.parse(body);
  .replace(/\"isFree\":.*?,/g, "\"isFree\":1,")
  .replace(/\"aType\":.*?,/g, "\"aType\":2,")
  .replace(/\"power\":\".*?\"/g, "\"power\":\"\"")
  .replace(/\"product_code\":[\".*?\"]/g, "\"product_code\":[]");
  .replace(/\"fee_content_id\":[\".*?\"]/g, "\"fee_content_id\":[]");
obj.data.ios_ad_513 = [];
obj.data.android_ad_513 = [];
body = JSON.stringify(obj);
$done({body});
*/
var body = $response.body
  .replace('var isPay = document', 'var isPay = 1;  #')
  .replace('var articleProperties', 'var articleProperties2')
  .replace(/nickname\":\".*?\"/g, 'nickname\":\"已解锁\"')
  .replace('isFree\":\\d', 'isFree\":0')
  .replace('aType\":\\d', 'aType\":0')
  .replace('feeType\":\\d', 'feeType\":0')
  .replace('power\":\".*?\"', 'power\":\"\"')
  .replace('product_code\":[.*?]', 'product_code\":[]')
$done({ body });
