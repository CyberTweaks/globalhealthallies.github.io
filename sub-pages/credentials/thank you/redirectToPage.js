// redirect.js
setTimeout(function() {
    window.location.href = '../login/login.html';
}, 3000); // 3 seconds delay

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
