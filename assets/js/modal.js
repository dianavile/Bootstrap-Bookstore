/* jshint esversion:6*/
//Add modal
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
});


//Add Validation to Submit button
const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
    e.preventDefault();
    const username = document.getElementById('username');
    const emailAddress = document.getElementById('email-address');
    if (username.value === "") {
        alert("Please enter your username.");
        username.focus();
        return false;
    }
    
    if (emailAddress.value === "") {
        alert("Please enter your email address.");
        emailAddress.focus();
        return false;
    }

    if (!emailIsValid(emailAddress.value)) {
        alert("Please enter a valid email address.");
        emailAddress.focus();
        return false;
    }
  
    return true; // Can submit the form data to the server
};

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

submitBtn.addEventListener('click', validate);