/* https://raw.githubusercontent.com/KimSeunghoo/Rewrite/master/QuantumultX/TextEditor.JS

TextEditor+ 一次性解锁
https://apps.apple.com/cn/app/id1483790257

[Script]
TextEditor = type=http-response,requires-body=1,pattern=^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt,script-path=Script/texteditor.js,enable=false

[MITM]
hostname = buy.itunes.apple.com
pattern = https://buy.itunes.apple.com/verifyReceipt

*/

var obj = JSON['parse']($response['body']);
var bundle_id = obj['receipt']['bundle_id'];
if (bundle_id == 'com.tapuniverse.texteditor') {
    obj = {
        'receipt': {
            'receipt_type': 'Production',
            'app_item_id': 30783538373064376231,
            'receipt_creation_date': '2021-02-21 04:34:51 Etc/GMT',
            'bundle_id': 'com.tapuniverse.texteditor',
            'original_purchase_date': '2021-02-21 04:34:51 Etc/GMT',
            'in_app': [{
                'quantity': '1',
                'purchase_date_ms': '1613882091000',
                'expires_date': '2090-11-21 02:05:07 Etc/GMT',
                'expires_date_pst': '2090-11-20 18:05:07 America/Los_Angeles',
                'is_in_intro_offer_period': 'false',
                'transaction_id': '470001065651309',
                'is_trial_period': 'false',
                'original_transaction_id': '470001065651309',
                'purchase_date': '2021-02-21 04:34:51 Etc/GMT',
                'product_id': 'com.tapuniverse.texteditor.w',
                'original_purchase_date_pst': '2021-02-20 20:34:51 America/Los_Angeles',
                'in_app_ownership_type': 'PURCHASED',
                'original_purchase_date_ms': '1613882091000',
                'web_order_line_item_id': '470000470987892',
                'expires_date_ms': '3814855507000',
                'purchase_date_pst': '2021-02-20 20:34:51 America/Los_Angeles',
                'original_purchase_date': '2021-02-21 04:34:51 Etc/GMT'
            }],
            'adam_id': 30783538373064376231,
            'receipt_creation_date_pst': '2021-02-20 20:34:51 America/Los_Angeles',
            'request_date': '2021-02-21 04:34:51 Etc/GMT',
            'request_date_pst': '2021-02-20 20:34:51 America/Los_Angeles',
            'version_external_identifier': 30783332336131316137,
            'request_date_ms': '1613882091000',
            'original_purchase_date_pst': '2021-02-20 20:34:51 America/Los_Angeles',
            'application_version': '4',
            'original_purchase_date_ms': '1613882091000',
            'receipt_creation_date_ms': '1613882091000',
            'original_application_version': '4',
            'download_id': 3078366630356235396433623230303030
        },
        'pending_renewal_info': [{
            'product_id': 'com.tapuniverse.texteditor.w',
            'original_transaction_id': '470001065651309',
            'auto_renew_product_id': 'com.tapuniverse.texteditor.w',
            'auto_renew_status': '1'
        }],
        'status': 0,
        'latest_receipt_info': [{
            'quantity': '1',
            'purchase_date_ms': '1613882091000',
            'expires_date': '2090-11-21 02:05:07 Etc/GMT',
            'expires_date_pst': '2090-11-20 18:05:07 America/Los_Angeles',
            'is_in_intro_offer_period': 'false',
            'transaction_id': '470001065651309',
            'is_trial_period': 'false',
            'original_transaction_id': '470001065651309',
            'purchase_date': '2021-02-21 04:34:51 Etc/GMT',
            'product_id': 'com.tapuniverse.texteditor.w',
            'original_purchase_date_pst': '2021-02-20 20:34:51 America/Los_Angeles',
            'in_app_ownership_type': 'PURCHASED',
            'subscription_group_identifier': '0000000',
            'original_purchase_date_ms': '1613882091000',
            'web_order_line_item_id': '470000470987892',
            'expires_date_ms': '3814855507000',
            'purchase_date_pst': '2021-02-20 20:34:51 America/Los_Angeles',
            'original_purchase_date': '2021-02-21 04:34:51 Etc/GMT'
        }],
        'latest_receipt': ''
    };
};
$done({
    'body': JSON['stringify'](obj)
});;
