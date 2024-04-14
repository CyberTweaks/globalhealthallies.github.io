function redirectToNearestHospital() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const url = `https://www.google.com/maps/search/hospitals/@${lat},${lng},15z`;
            window.location.href = url;
        }, () => {
            alert('Geolocation is not supported by your browser');
        });
    } else {
        alert('Geolocation is not supported by your browser');
    }
}

function isPortrait() {
    return window.innerHeight > window.innerWidth;
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