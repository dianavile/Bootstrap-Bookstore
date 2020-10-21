/* jshint esversion:6*/

//declare variables
const loginform = document.getElementById('login.form');
const Email2 = document.getElementById('Email2');
const Password2 = document.getElementById('Password2');
	
//add Event on submit
loginform.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

//check inputs
function checkInputs() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();
	const password2Value = password2.value.trim();
	
	//conditionals
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

//functions
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//validar_email
//REGEX function to validate correct email address
function isEmail(email) {
	let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

//loginValidation();

