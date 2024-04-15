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


document.addEventListener("DOMContentLoaded", function() {
    const landscapePopup = document.getElementById("landscape-popup");
  
    // Function to show or hide the landscape popup
    function toggleLandscapePopup() {
        if (window.innerWidth < window.innerHeight) {
            landscapePopup.style.display = "block";
            // Set a higher z-index for the landscape popup
            landscapePopup.style.zIndex = "1001";
        } else {
            landscapePopup.style.display = "none";
        }
    }
  
    // Initial check
    toggleLandscapePopup();
  
    // Check orientation on window resize
    window.addEventListener("resize", toggleLandscapePopup);
});
