const firebaseConfig = {
  apiKey: "AIzaSyD6cgU1XBKUupnhtHRp2tUFhlQZn9tfWfE",
  authDomain: "globalhealthallies.firebaseapp.com",
  projectId: "globalhealthallies",
  storageBucket: "globalhealthallies.appspot.com",
  messagingSenderId: "174777389207",
  appId: "1:174777389207:web:0940b1cc0c49a594ab59d2",
  measurementId: "G-7SKX7TWY3K"
};


const app = firebase.initializeApp(firebaseConfig); // Change "initializeApp" to "firebase.initializeApp"
const analytics = firebase.getAnalytics(app); // Change "getAnalytics" to "firebase.getAnalytics"
const auth = firebase.auth(); // Initialize Firebase Authentication

const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createAcct = document.getElementById("create-acct"); // Corrected variable name

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createAcctBtn = document.getElementById("create-acct-btn"); // Corrected variable name

const returnBtn = document.getElementById("return-btn");

createAcctBtn.addEventListener("click", function() {
  var isVerified = true;

  const signupEmail = signupEmailIn.value;
  const confirmSignupEmail = confirmSignupEmailIn.value;
  if(signupEmail !== confirmSignupEmail) { // Use strict equality operator
      window.alert("Email fields do not match. Try again.");
      isVerified = false;
  }

  const signupPassword = signupPasswordIn.value;
  const confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if(signupPassword !== confirmSignUpPassword) { // Use strict equality operator
      window.alert("Password fields do not match. Try again.");
      isVerified = false;
  }
  
  if(!signupEmail || !confirmSignupEmail || !signupPassword || !confirmSignUpPassword) { // Check for null or empty values
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

submitButton.addEventListener("click", function() {
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login successful
      window.alert("Success! Welcome back!");
    })
    .catch((error) => {
      // Handle errors
      window.alert("Error occurred. Try again.");
    });
});

signupButton.addEventListener("click", function() {
    main.style.display = "none";
    createAcct.style.display = "block";
});

returnBtn.addEventListener("click", function() {
    main.style.display = "block";
    createAcct.style.display = "none";
});
