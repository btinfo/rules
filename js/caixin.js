/*
 ^https:\/\/mappsv5\.caixin\.com\/index_page_v5\/operate_index_page_1\.json

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
*******************************************************************************/
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
