function redirectToDashboard() {
    // Redirect to the dashboard page after sign-up
    window.location.href = "Webpages/sub-pages/Dashboard/dashboard.html";
}

function togglePasswordVisibility() {
    var passwordInputs = document.querySelectorAll('.form__input__password');
    var togglePasswords = document.querySelectorAll('.toggle-password');

    togglePasswords.forEach(function(togglePassword, index) {
        if (passwordInputs[index].type === 'password') {
            passwordInputs[index].type = 'text';
            togglePassword.textContent = 'Hide';
        } else {
            passwordInputs[index].type = 'password';
            togglePassword.textContent = 'Show';
        }
    });
}


function validateForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false; // Prevent form submission
    }

    // Redirect to thank you page only if passwords match
    window.location.href = "../thank%20you/Thank.html";

    return false; // Prevent default form submission
}
