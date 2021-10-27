// WPS Office
// ^https?:\/\/account\.wps\.cn\/api\/users requires-body=1,max-size=-1
// hostname = account.wps.cn

let obj = JSON.parse($response.body);
obj.exp = "0";
obj.level = "3";
obj.privilege = [
  { "spid": "data_recover", "times": 0, "expire_time": 1846256142 },
  { "spid": "ocr", "times": 0, "expire_time": 1846256142 },
  { "spid": "pdf2doc", "times": 0, "expire_time": 1846256142 },
  { "spid": "pdf_merge", "times": 0, "expire_time": 1846256142 },
  { "spid": "pdf_sign", "times": 0, "expire_time": 1846256142 },
  { "spid": "pdf_split", "times": 0, "expire_time": 1846256142 }
];
obj.result = "ok";
obj.total_buy = "0";
obj.total_cost = "-30";
obj.userid = "body.userid";
obj.vip.name = "Super member";
obj.vip.has_ad = "0";
obj.vip.memberid = "40";
obj.vip.expire_time = "1846256142";
obj.vip.enabled = [
  { "memberid": "40", "name": "Super member","expire_time": "1846256142" },
  { "memberid": "20", "name": "WPS member", "expire_time": "1846256142" },
  { "memberid": "12", "name": "Rice husk member", "expire_time": "1846256142" }
];
obj.wealth = "0";
obj.expire_time = "1846256142";
$done({body: JSON.stringify(obj)});
