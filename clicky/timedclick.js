/*
function datedef()
{
	var currentdate = new Date();
	var datetime = "Last Sync: " + currentdate.getDay() + "/"+currentdate.getMonth() 
	+ "/" + currentdate.getFullYear() + " @ " 
	+ currentdate.getHours() + ":" 
	+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
	//alert(datetime);
	if(currentdate.getHours() == 12)
		document.getElementById("test").click();
}
function codeAddress()
{
    alert('ok');
}
*/
setInterval(function() {
  var currentdate = new Date();
	var datetime = "thetime: " + currentdate.getDay() + "/"+currentdate.getMonth() 
	+ "/" + currentdate.getFullYear() + " @ " 
	+ currentdate.getHours() + ":" 
	+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
	//alert(datetime);
	if(currentdate.getHours() == 12)
		document.getElementById("test").click();
}, 5000);