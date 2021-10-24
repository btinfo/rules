/*
WPS(APP及小程序)解锁SVIP
https://(vip|account).wps.cn/(api/users/|userinfo)
*/

const path1 = "/api/users/";
const path2 = "/userinfo";
 let key =
[{"spid":"data_recover","times":0,"expire_time":1846256142},{"spid":"ocr","times":0,"expire_time":1846256142},{"spid":"pdf2doc","times":0,"expire_time":1846256142},{"spid":"pdf_merge","times":0,"expire_time":1846256142},{"spid":"pdf_sign","times":0,"expire_time":1846256142},{"spid":"pdf_split","times":0,"expire_time":1846256142},{"expire_time":1846256142,"spid":"ads_free"},{"expire_time":1846256142,"spid":"advanced_print"},{"expire_time":1846256142,"spid":"doc_lose_weight"},{"expire_time":1846256142,"page":50,"spid":"doc_translate"},{"expire_time":1846256142,"spid":"document_recover"},{"expire_time":1846256142,"spid":"hd_noise_reduction"},{"expire_time":1846256142,"spid":"lossless_enlarge"},{"expire_time":1846256142,"spid":"output_long_img"}];
let svip = {"name":"超级会员","has_ad":0,"memberid":40,"expire_time":1846256142,"enabled":[{"memberid":40,"name":"超级会员","expire_time":1846256142},{"memberid":20,"name":"WPS会员","expire_time":1846256142},{"memberid":12,"name":"稻壳会员","expire_time":1846256142}]};
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.privilege = key;
obj.vip = svip;
}
if ($request.url.indexOf(path2) != -1){
obj.data.privilege = key;
obj.data.vip = svip;
}
$done({body: JSON.stringify(obj)});
