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