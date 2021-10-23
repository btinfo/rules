/*
https://program-sc.miguvideo.com/program/v3/cont/
*/
var body = $response.body
    .replace(/\"code\":\"WUDALIANSAIFUFEI01\"/g, "\"code\":\"FREE\"")
    .replace(/\"code\":\"VIP\"/g, "\"code\":\"FREE\"");
$done({ body });
