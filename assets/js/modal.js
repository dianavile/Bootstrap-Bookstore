    
$("#myModal").modal();

// If the user clicks outside of the modal, the modal will close
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};