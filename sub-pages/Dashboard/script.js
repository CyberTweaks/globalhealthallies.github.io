document.addEventListener('DOMContentLoaded', function() {
  const modeToggleBtn = document.getElementById('mode-toggle-btn');
  const body = document.body;

  // Toggle light/dark mode
  modeToggleBtn.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    modeToggleBtn.textContent = body.classList.contains('light-mode') ? 'Light Mode' : 'Dark Mode';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // BMI Calculator Button
  document.getElementById('bmiBtn').addEventListener('click', function() {
    window.location.href = '../BMI Calculator/BMI_calculator.html'; // Replace 'bmi_calculator.html' with the URL of your BMI calculator page
  });

  // Hospimatch Prime Button
  document.getElementById('hospimatchBtn').addEventListener('click', function() {
    window.location.href = '../Hospital suggester/Hospital_suggester.html'; // Replace 'hospimatch_prime.html' with the URL of your Hospimatch Prime page
  });

  // Medimatch Pro Button
  document.getElementById('medimatchBtn').addEventListener('click', function() {
    window.location.href = '../Medicine_Suggester/Medicine_Suggester.html'; // Replace 'medimatch_pro.html' with the URL of your Medimatch Pro page
  });
});
