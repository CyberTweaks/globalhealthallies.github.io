function redirectToLoginPage() {
    // Redirect to the login page
    window.location.href = "Webpages/sub-pages/Dashboard/dashboard.html";
}

document.addEventListener('DOMContentLoaded', function () {
    // Function to load login page content
    function loadLoginPage() {
        document.getElementById('loginForm').innerHTML = `<h1 class="form__title">Login</h1>
            <div class="form__message form__message--error">Invalid Username or Password.</div>
            <div class="form__input-group">
                <input type="text" class="form__input" placeholder="Username" autofocus>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input " placeholder="Password" autofocus>
            </div>
            <button class="form__button" type="button" id="loginButton">Login</button>
            <p class="form__text">
                <a href="../sign up/signup.html" class="form__link" id="linkCreateAccount">Don't have an account? Create account.</a>
            </p>`;
        document.getElementById('loginButton').addEventListener('click', redirectToLoginPage);
    }

    // Function to redirect to login page
    function redirectToLoginPage() {
        loadLoginPage();
    }

    loadLoginPage(); // Load the login page initially
});

