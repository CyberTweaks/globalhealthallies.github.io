const toggleBtn = document.getElementById('mode-toggle-btn');

toggleBtn.addEventListener('change', function() {
    if(this.checked) {
        // Dark mode activated
        document.body.classList.add('dark-mode');
    } else {
        // Light mode activated
        document.body.classList.remove('dark-mode');
    }
});

document.addEventListener('DOMContentLoaded', function() {
  // BMI Calculator Button
  document.getElementById('bmiBtn').addEventListener('click', function() {
    window.location.href = '../BMI Calculator/BMI_calculator.html'; 
  });

  // Hospimatch Prime Button
  document.getElementById('hospimatchBtn').addEventListener('click', function() {
    window.location.href = '../Hospital suggester/Hospital_suggester.html';
  });

  // Medimatch Pro Button
  document.getElementById('medimatchBtn').addEventListener('click', function() {
    window.location.href = '../Medicine_Suggester/Medicine_Suggester.html'; 
  });

  // MedInfo Hub Button
  document.getElementById('medinfoBtn').addEventListener('click', function() {
    window.location.href = '../Pharmavogue/medicineinfo.html'; 
  });
  // About us Hub Button
  document.getElementById('aboutusBtn').addEventListener('click', function() {
    window.location.href = '../about_us/about_us.html'; 
  });
  
});
  // Get references to the button and the embedded content
  const button = document.getElementById('dailexBtn');
  const embedContent = document.querySelector('.dail');

  // Function to show the embedded content
  function showEmbedContent() {
    embedContent.style.display = 'block';
  }

  // Function to hide the embedded content
  function hideEmbedContent() {
    embedContent.style.display = 'none';
  }

  // Event listener for button click
  button.addEventListener('click', function() {
    // Toggle the display of the embedded content
    if (embedContent.style.display === 'none') {
      showEmbedContent();
    } else {
      hideEmbedContent();
    }
  });

  // Hide the embedded content initially
  hideEmbedContent();