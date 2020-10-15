/* jshint esversion:6*/

const form = document.getElementById('myFormId');

function registerValidate() {
	let acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	const inputEmail = document.getElementById('inputEmail');	
	const inputPassword = document.forms["register.form"]["input.Password"];
	const inputAddress = document.forms["register.form"]["input.Address"];
	const inputProvince = document.forms["register.form"]["input.Province"];
	const inputCity = document.forms["register.form"]["input.City"];
	const inputZip = document.forms["register.form"]["input.Zip"];
	const gridCheck = document.forms["register.form"]["grid.Check"];

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
	
    if(inputAddress.value == "") {
		inputAddress.classList.add("is-invalid");
		document.getElementById("errorAddress").textContent = "This field is required";
		acumErrores ++;
	}

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "The province is required";
		acumErrores ++;
	}
	
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "The city is missing";
		acumErrores ++;
	}
	
	if(inputZip.value == "" || inputZip.length!=5) {
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "The zipcode does not meet requirements.";
		acumErrores ++;
	}
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "I accept";
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
