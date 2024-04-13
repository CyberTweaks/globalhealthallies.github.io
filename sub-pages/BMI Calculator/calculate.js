function calculateBMI() {
    // Get the values of height and weight from input fields
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    // Check if height or weight is empty
    if (height === '' || weight === '') {
        alert("Please enter both height and weight.");
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2); // Round BMI to 2 decimal places

    // Prepare result text
    var resultText = "Your BMI is: " + bmi;

    // Determine BMI category based on BMI value
    if (bmi < 18.5) {
        resultText += " (Underweight)";
    } else if (bmi >= 18.5 && bmi < 25) {
        resultText += " (Normal weight)";
    } else if (bmi >= 25 && bmi < 30) {
        resultText += " (Overweight)";
    } else {
        resultText += " (Obese)";
    }

    // Display result text
    document.getElementById("result").innerText = resultText;
}
