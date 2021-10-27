var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const balance = "/pay/balance"
const memberCard = "/pay/memberCardSummary"
if (url.indexOf(balance) != -1) {
  obj.balance = 99999999;
  body = JSON.stringify(obj);
}
if (url.indexOf(memberCard) != -1) {
  obj.expiredTime = 2302963199;
  obj.expired = 0
  obj.remainTime = 9999999999
  obj.savedMoney = 9999999
  body = JSON.stringify(obj);
}
$done({body});
