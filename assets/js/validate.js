
/* jshint esversion:6*/

//declare forms variable
//const search = document.getElementById("myForm");
//const register= document.getElementById('register.form');
//const loginform = document.getElementById('login.form');

// Fetch all forms 
const forms = document.getElementsByClassName('needs-validation');

// Loop over them and prevent submission
let validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
    form.classList.add('was-validated');
    }, false);
});


//conditionals
/*
function validateForm() {
  let x = document.forms["myForm"]["search"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
if (form === register);
else if (form === login);
else (form === search);
*/
