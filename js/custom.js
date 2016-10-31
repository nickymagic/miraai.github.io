//Vrsio sam proveru preko regex-a, mogu odraditi i standardno preko if-else, ali ovo mi je cistije. :)
function proveri(){
	var name = document.getElementById("first-name").value;
	var last_name = document.getElementById("last-name").value;
	var subject = document.getElementById("title-name").value;
	var type = document.getElementById("message-type").value;
	var phone = document.getElementById("phone").value;
	var message = document.getElementById("message").value;
	var patt = /^[a-zA-Z]{3,20}$/;
	var phone_patt = /^\+?\d{5,15}$/;
	var erro = new Array();
	var isError = false;
	document.getElementById("form-messages").innerHTML = "";
	if(!patt.test(name)){
		erro.push("Ime nije validno.<br>");
		isError = true;
	}
	if(!patt.test(last_name)){
		erro.push("Prezime nije validno.<br>");
		isError = true;
	}
	if(!phone_patt.test(phone)){
		erro.push("Telefon nije validan.<br>");
		isError = true;
	}
	if(message.length < 15 || message.length > 250){
		erro.push("Vasa poruka mora biti izmedju 15 i 250 karaktera.<br>");
		isError = true;
	}
	if(isError){
		for (var i = 0; i < erro.length; i++) {
			document.getElementById("form-messages").innerHTML += erro[i];
		}
	}
	else{
		alert("Vasa poruka je uspesno verifikovana!");
	}
}
function countChars(){
	document.getElementById("counter").innerHTML = (document.getElementById("message").value).length;
}
function displayData(obj){
	document.getElementById("desc").innerHTML = obj.getAttribute("data-desc");
	document.getElementById("desc").style.display = "block";
}
function hideData(obj){
	document.getElementById("desc").style.display = "none";
	document.getElementById("desc").innerHTML = "";
}
function progress(percent, element, skill) {
	var progressBarWidth = percent * element.width() / 100;
	element.find('div').html("<p>"+skill+"</p>");
	element.find('div').animate({ width: progressBarWidth }, 1000);
}
function tableHover(obj){
	console.log(obj);
	obj.style.backgroundColor = "#3498db";
	obj.style.color = "#fff";
	obj.style.cursor = "pointer";
}
function tableUnHover(obj){
	obj.style.backgroundColor = "#fff";
	obj.style.color = "#373a3c";	
}
