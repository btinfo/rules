var body = $response.body
  .replace(/\"isVip\":1/g, "\"isVip\":0");
$done({ body });
