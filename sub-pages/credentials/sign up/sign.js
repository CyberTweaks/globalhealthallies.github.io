function redirectToPage() {
    // Replace "target_page.html" with the URL of the page you want to redirect to
    window.location.href = "../credentials/thank you/Thank.html";

    function setFornMessage(formElement, type, message){
      const messageElement = formElement.querySelector(".form__message");
  
      messageElement.textContent = message;
      messageElement.classList.remove("form__message--success", "form message--error");
      messageElement.classList.add('form__message--${type}');
  }


}
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

createacctbtn.addEventListener("click", function() {
  // Collect email and password inputs
  const signupEmail = signupEmailIn.value;
  const signupPassword = signupPasswordIn.value;

  // Create user with email and password
  createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    .then((userCredential) => {
      // Account creation successful
      window.alert("Success! Account created.");
    })
    .catch((error) => {
      // Handle errors
      window.alert("Error occurred. Try again.");
    });
});

createacctbtn.addEventListener("click", function() {
  var isVerified = true;

  const signupEmail = signupEmailIn.value;
  const confirmSignupEmail = confirmSignupEmailIn.value;
  if(signupEmail != confirmSignupEmail) {
      window.alert("Email fields do not match. Try again.");
      isVerified = false;
  }

  const signupPassword = signupPasswordIn.value;
  const confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if(signupPassword != confirmSignUpPassword) {
      window.alert("Password fields do not match. Try again.");
      isVerified = false;
  }
  
  if(signupEmail == '' || confirmSignupEmail == '' || signupPassword == '' || confirmSignUpPassword == '') {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }
  
  if(isVerified) {
    firebase.auth().createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then((userCredential) => {
        // Account creation successful
        window.alert("Success! Account created.");
      })
      .catch((error) => {
        // Handle errors
        window.alert("Error occurred. Try again.");
      });
  }
});
