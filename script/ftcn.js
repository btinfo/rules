/* https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ftchinese.js

FT中文网 高端会员
https://apps.apple.com/cn/app/id443870811

[Script]
FT中文网 = type=http-response,requires-body=1,pattern=^https?:\/\/user\.ftmailbox\.cn\/ios-receipt-validation\.php.*,script-path=Script/ftcn.js,enable=false

[MITM]
hostname = user.ftmailbox.cn
pattern = https://user.ftmailbox.cn/ios-receipt-validation.php.*

*/
$done({body: JSON.stringify({
  environment:"Production",
  receipt:{
    in_app:[{
      quantity:"1",
      product_id:"com.ft.ftchinese.mobile.subscription.vip",
      expires_date:"2023-04-02 22:22:22 Etc/GMT",
      expires_date_ms:"1680465780000",
      expires_date_pst:"2023-04-02 22:22:22 America/Los_Angeles",
      in_app_ownership_type:"PURCHASED"
    }]
  },
  latest_receipt_info:[{
    quantity:"1",
    product_id:"com.ft.ftchinese.mobile.subscription.vip",
    expires_date:"2023-04-02 22:22:22 Etc/GMT",
    expires_date_ms:"1680465780000",
    expires_date_pst:"2023-04-02 22:22:22 America/Los_Angeles",
    in_app_ownership_type:"PURCHASED"
  }],
  latest_receipt:"NA",
  pending_renewal_info:[{
    auto_renew_product_id:"com.ft.ftchinese.mobile.subscription.vip",
    product_id:"com.ft.ftchinese.mobile.subscription.vip",
    auto_renew_status:"0"
  }],
  status:0
  })
});
