<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><input type="password" id="passwordInput"><br>
        <button type="button" onclick="storeCredentials()">Store Credentials</button>
    </form>
    <script>
        function storeCredentials() {
            var email = document.getElemen
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email and Password Storage</title>
</head>
<body>
    <form id="loginForm">
        Email: <input type="email" id="emailInput"><br>
        Password: tById('emailInput').value;
            var password = document.getElementById('passwordInput').value;
            var data = {
                email: email,
                password: password
            };
            localStorage.setItem('credentials', JSON.stringify(data));
            alert('Credentials stored successfully!');
        }
    </script>
</body>
</html>
