let body = JSON.parse($response.body);
if (body["ad"]) body["ad"] = [];
if (body["advertises"]) body["advertises"] = [];
if (body["statuses"] && body["statuses"].length > 0) {
  let i = body["statuses"].length;
  while (i--) {
    if (body["statuses"][i]["ad_state"]) {
      delete body["statuses"][i];
    }
  }
}
$done({ body: JSON.stringify(body) });
