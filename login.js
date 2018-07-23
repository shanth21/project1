
window.onload = function() {
var button = document.getElementById("btn");
var name = document.getElementById("name");
var password = document.getElementById("password");

var isValid = function() {
var match = name.value.match(/^[a-zA-z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);
var errNameRef = document.getElementById("js-name-err-msg");
var errPasswordRef = document.getElementById("js-password-err-msg");


	if(!match){
		errNameRef.innerHTML = "Enter a valid mail id!";
		return false;
	}else if(!password.value){
		errNameRef.innerHTML = "";
		errPasswordRef.innerHTML = "Enter a valid password!";
		return false;
	}else{
		errNameRef.innerHTML = errPasswordRef.innerHTML = "";

		return true;
	}
}

name.onkeypress = function(e){
	isValid();
}
password.onkeypress = function(e){
	isValid();
}		

button.onclick = function(){
	if(isValid()){
		alert("Logged in successfully!");
	}
}
}

