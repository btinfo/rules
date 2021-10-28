// ^https:\/\/mappsv5\.caixin\.com\/index_page_v5\/operate_index_page_1\.json

var body = $response.body;
var obj = JSON.parse(body);
obj.data.ios_ad_513 = [];
obj.data.android_ad_513 = [];
  //.replace('var isPay = document', 'var isPay = 1;  #')
  //.replace('var articleProperties', 'var articleProperties2')
  //.replace(/nickname\":\".*?\"/g, 'nickname\":\"已解锁\"')
  //.replace(/\"article_type\":1/g, "\"article_type\":1")
  //.replace(/\"isFree\":1/g, "\"isFree\":0")
  //.replace(/\"aType\":2/g, "\"aType\":0")
  //.replace(/\"feeType\":1/g, "\"feeType\":0");
body = JSON.stringify(obj);
$done({body});
