<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Heart Me Out</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="login-container">
        <h1>Heart Me Out</h1>
        <?php
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Database connection
            $conn = new mysqli('localhost', 'root', '', 'heart me_out');
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Get email and password from the form
            $email = $conn->real_escape_string($_POST['email']);
            $password = $conn->real_escape_string($_POST['password']);

            // Check if the user exists
            $query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
            $result = $conn->query($query);

            if ($result->num_rows > 0) {
                // Login successful
                echo "<p style='color:green;'>Login successful! Redirecting...</p>";
                echo "<script>setTimeout(() => window.location.href = 'video.html', 2000);</script>";
            } else {
                // Invalid credentials
                echo "<p style='color:red;'>Invalid email or password. Please try again.</p>";
            }

            $conn->close();
        }
        ?>
        <form id="loginForm" method="POST">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
            </div>
            <button type="submit" class="btn">Login</button>
        </form>
    </div>
</body>
</html>
