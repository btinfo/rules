var body = JSON.parse($response.body);
var obj = {
  exp: 0,
  level: 3,
  privilege: [
    { spid: "data_recover", times: 0, expire_time: 1846256142 },
    { spid: "ocr", times: 0, expire_time: 1846256142 },
    { spid: "pdf2doc", times: 0, expire_time: 1846256142 },
    { spid: "pdf_merge", times: 0, expire_time: 1846256142 },
    { spid: "pdf_sign", times: 0, expire_time: 1846256142 },
    { spid: "pdf_split", times: 0, expire_time: 1846256142 }
  ],
  result: "ok",
  total_buy: 0,
  total_cost: -30,
  userid: body.userid,
  vip: {
    name: "\u8d85\u7ea7\u4f1a\u5458",
    has_ad: 0,
    memberid: 40,
    expire_time: 1846256142,
    enabled: [
      { memberid: 40, name: "\u8d85\u7ea7\u4f1a\u5458", expire_time: 1846256142 },
      { memberid: 20, name: "\u0057\u0050\u0053\u4f1a\u5458", expire_time: 1846256142 },
      { memberid: 12, name: "\u7a3b\u58f3\u4f1a\u5458", expire_time: 1846256142 }
    ]
  },
  wealth: 0,
  expire_time: 1846256142
};

$done({ body: JSON.stringify(obj) });
