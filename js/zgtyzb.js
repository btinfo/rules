const path1 = "/room/get-room-info-v430";
let obj = JSON.parse($response.body);
if ($request.url.indexOf(path1) != -1){
	obj.data.anchor["userHas"] = "1";	
}
$done({body: JSON.stringify(obj)});
