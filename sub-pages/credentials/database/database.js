<!DOCTYPE html> <!-- Document type declaration -->
<html lang="en"> <!-- Opening tag for HTML document with language attribute -->
<head>
    <meta charset="UTF-8"> <!-- Character encoding -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive viewport -->
    <title>Email and Password Storage</title> <!-- Title of the webpage -->
</head>
<body>
    <form id="loginForm"> <!-- Form for user login with an ID -->
        Email: <input type="email" id="emailInput"><br> <!-- Email input field -->
        Password: <input type="password" id="passwordInput"><br> <!-- Password input field -->
        <!-- Button to store credentials -->
        <button type="button" onclick="storeCredentials()">Store Credentials</button>
    </form>

    <!-- JavaScript for storing credentials -->
    <script>
        function storeCredentials() {
            // Get the values of email and password input fields
            var email = document.getElementById('emailInput').value;
            var password = document.getElementById('passwordInput').value;
            // Create an object to store email and password
            var data = {
                email: email,
                password: password
            };
            // Store data in local storage after converting to JSON format
            localStorage.setItem('credentials', JSON.stringify(data));
            // Alert the user after successfully storing credentials
            alert('Credentials stored successfully!');
        }
    </script>
</body>
</html>
