function redirectToLoginPage() {
    // Redirect to the login page
    window.location.href = "Webpages/sub-pages/Dashboard/dashboard.html";
}

function setFornMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form message--error");
    messageElement.classList.add('form__message--${type}');
}
    setFornMessage(loginForm, "success", "You're logged in!")
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
            <button class="form__button" type="button" id="loginButton">Submit</button>
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
document.addEventListener("DOMContentLoaded", function() {
    const landscapePopup = document.getElementById("landscape-popup");
  
    // Function to show or hide the landscape popup
    function toggleLandscapePopup() {
      if (window.innerWidth < window.innerHeight) {
        landscapePopup.style.display = "block";
      } else {
        landscapePopup.style.display = "none";
      }
    }
  
    // Initial check
    toggleLandscapePopup();
  
    // Check orientation on window resize
    window.addEventListener("resize", toggleLandscapePopup);
  });
  
  submitButton.addEventListener("click", function() {
    // Collect email and password inputs
    const email = emailInput.value;
    const password = passwordInput.value;
  
    // Sign in user with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        window.alert("Success! Welcome back!");
      })
      .catch((error) => {
        // Handle errors
        window.alert("Error occurred. Try again.");
      });
  });
  submitButton.addEventListener("click", function() {
    const email = emailInput.value;
    const password = passwordInput.value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful
        window.alert("Success! Welcome back!");
        // Redirect to the dashboard
        window.location.href = "../../Dashboard/dashboard.html";
      })
      .catch((error) => {
        // Handle errors
        window.alert("Error occurred. Try again.");
      });
  });
  
  