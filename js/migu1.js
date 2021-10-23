var body = $response.body
    .replace(/\"2021-09-29 16:50:52\"/p, "\"2099-12-31 23:59:59\"")
    .replace(/\"isDiamond\":[true|false]/, "\"isDiamond\":true")
    .replace(/\"skipBeforeAd\":[true|false]/, "\"skipBeforeAd\":true")
    .replace(/\"isVip\":[true|false]/, "\"isVip\":true");
$done({ body });
