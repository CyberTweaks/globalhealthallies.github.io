function redirectToPage() {
    // Replace "target_page.html" with the URL of the page you want to redirect to
    window.location.href = "../credentials/thank you/Thank.html";
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
</script>
