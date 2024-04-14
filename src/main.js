document.addEventListener("DOMContentLoaded", function () {
    document.body.style.overflowY = "scroll";
});

function redirectToBMIPage() {
    // Redirect to the login page
    window.location.href = "../sub-pages/BMI Calculator/BMI_calculator.html";
}

function redirectToMed_MatchPage() {
    // Redirect to the login page
    window.location.href = "../sub-pages/Medicine_Suggester/Medicine_suggester.html";
}

function redirectToMedInfoPage() {
    // Redirect to the login page
    window.location.href = "../sub-pages/Pharmavogue/medicineinfo.html";
}

function redirectToHospiMatchPage() {
    // Redirect to the login page
    window.location.href = "../sub-pages/Hospital suggester/Hospital_suggester.html";
}

function isPortrait() {
    return window.innerHeight > window.innerWidth;
}

// Function to display the orientation prompt if in portrait mode
function showOrientationPrompt() {
    if (isPortrait()) {
        document.getElementById('orientation-prompt').style.display = 'flex';
    } else {
        document.getElementById('orientation-prompt').style.display = 'none';
    }
}

// Show the orientation prompt initially and on window resize
window.addEventListener('resize', showOrientationPrompt);
showOrientationPrompt();