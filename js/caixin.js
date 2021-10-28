// ^https:\/\/mappsv5\.caixin\.com\/index_page_v5\/operate_index_page_1\.json

var body = $response.body
  //.replace('var isPay = document', 'var isPay = 1;  #')
  //.replace('var articleProperties', 'var articleProperties2')
  //.replace(/nickname\":\".*?\"/g, 'nickname\":\"已解锁\"')
  .replace(/isFree\":\\d/g, 'isFree\":0')
  .replace(/aType\":\\d/g, 'aType\":0')
  //.replace(/feeType\":\\d/g, 'feeType\":0');
$done({ body });
