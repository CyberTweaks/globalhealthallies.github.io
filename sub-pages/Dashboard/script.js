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
document.getElementById('open-window-btn').addEventListener('click', function() {
  // Create a new window
  const newWindow = window.open('', '_blank', 'width=300,height=200,top=100,left=100');
  
  // Generate content for the new window using a list
  const listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  let content = '<html><head><title>New Window</title></head><body><h1>List in New Window</h1><ul>';
  listItems.forEach(item => {
      content += `<li>${item}</li>`;
  });
  content += '</ul></body></html>';

  // Write content to the new window
  newWindow.document.write(content);
});
