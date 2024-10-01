document.addEventListener("DOMContentLoaded", function () {
    document.body.style.overflowY = "scroll";
});

function redirectToBMIPage() {
    // Redirect to the login page
    window.location.href = "./sub-pages/BMI Calculator/BMI_calculator.html";
}

function redirectToMed_MatchPage() {
    // Redirect to the login page
    window.location.href = "./sub-pages/Medicine_Suggester/Medicine_suggester.html";
}

function redirectToMedInfoPage() {
    // Redirect to the login page
    window.location.href = "./sub-pages/Pharmavogue/medicineinfo.html";
}

function redirectToHospiMatchPage() {
    // Redirect to the login page
    window.location.href = "./sub-pages/Hospital suggester/Hospital_suggester.html";
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
  