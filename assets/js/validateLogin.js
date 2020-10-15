/* jshint esversion:6*/

const form = document.getElementById('login.form');

function loginValidate() {
	let acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	const inputEmail = document.getElementById('inputEmail');	
	const inputPassword = document.forms["login.form"]["input.Password"];


	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "This field is required";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "This email does not contain the correct format";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "This field is required";
		acumErrores ++;
	}
	
    if (acumErrores > 0){
        return false;
    } else{
		return true;
	}
}

form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

//REGEX function to validate correct email address
function validar_email(email) {
	let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
