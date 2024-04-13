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
});
