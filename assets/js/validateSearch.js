/* jshint esversion:6*/

const form = document.getElementById('search.form');

function registerValidate() {
	let acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	const inputSearch = document.getElementById('inputSearch');	
	
	if(inputSearch.value == "" || inputZip.length<3) {
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "This searchword does not meet requirements.";
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

