function redirectToPage() {
    // Replace "target_page.html" with the URL of the page you want to redirect to
    window.location.href = "../credentials/thank you/Thank.html";
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