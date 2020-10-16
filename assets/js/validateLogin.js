/* jshint esversion:6*/

const loginForm = document.getElementById('login.form');

function loginValidate() {
	let acumErrores = 0;
	
	loginForm.classList.remove('is-invalid');
	
	const username = document.getElementById('username');	
	const currentPassword = document.forms["login.form"]["input.Password"];


	if(username.value == "") {
		username.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "This field is required";
        acumErrores ++;
    }else if(!validar_email(username.value)){
		username.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "This email does not contain the correct format";
		acumErrores ++;
	}

    if(currentPassword.value == "") {
		currentPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "This field is required";
		acumErrores ++;
	}
	
    if (acumErrores > 0){
        return false;
    } else{
		return true;
	}
}

loginForm.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

//REGEX function to validate correct email address
function validar_email(email) {
	let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
