
var socket = io();

function checkIfUsernameAvailable() {

}

function checkIfConfirmPasswordMatches(e) {
    var password = document.querySelector("input[name='password']").value;
    var confirm_password = document.querySelector("input[name='confirm_password']").value;
    if (e.value.length > 0) {
        if (password != confirm_password) {
            document.querySelector("#confirm-password-error-message").style.display = "flex";
            document.querySelector("#confirm-password-success-message").style.display = "none";
        }
        else if (password === confirm_password) {
            document.querySelector("#confirm-password-error-message").style.display = "none";
            document.querySelector("#confirm-password-success-message").style.display = "flex";
        }
    }
    else {
        return
    }
}