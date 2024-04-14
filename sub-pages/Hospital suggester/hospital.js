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