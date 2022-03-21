/*

Vista看天下 @yy 2021-12-02
https://apps.apple.com/cn/app/id1060011393

[Script]
Vista看天下 = type=http-response,requires-body=1,pattern=^https:\/\/open3\.vistastory\.com\/v3\/api\/(article\/article_detail2|magazine\/mag_column_detail),script-path=Script/vista.js

[MITM]
hostname = open3.vistastory.com
pattern = https://open3.vistastory.com/v3/api/article/article_detail2
pattern = https://open3.vistastory.com/v3/api/magazine/mag_column_detail

[Replace]
isBuyArticle":0 => isBuyArticle":1

*/

var body = $response.body.replace(/\u0069\u0073\u0042\u0075\u0079\u0041\u0072\u0074\u0069\u0063\u006c\u0065\u0022\u003a\u0030/g, '\u0069\u0073\u0042\u0075\u0079\u0041\u0072\u0074\u0069\u0063\u006c\u0065\u0022\u003a\u0031');
$done({ body });
