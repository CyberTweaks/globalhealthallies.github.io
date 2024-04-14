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