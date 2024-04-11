function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if (height === '' || weight === '') {
        alert("Please enter both height and weight.");
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);

    var resultText = "Your BMI is: " + bmi;

    if (bmi < 18.5) {
        resultText += " (Underweight)";
    } else if (bmi >= 18.5 && bmi < 25) {
        resultText += " (Normal weight)";
    } else if (bmi >= 25 && bmi < 30) {
        resultText += " (Overweight)";
    } else {
        resultText += " (Obese)";
    }

    document.getElementById("result").innerText = resultText;
}