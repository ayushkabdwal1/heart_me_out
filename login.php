<?php
session_start();

// Dummy credentials for demo
$valid_email = 'user@example.com';
$valid_password = 'password123';

// Get form data
$email = $_POST['email'];
$password = $_POST['password'];

// Validate credentials
if ($email === $valid_email && $password === $valid_password) {
    $_SESSION['user'] = $email;
    header("Location: userside.php"); // Redirect to userside.php
    exit();
} else {
    echo "Invalid email or password.";
}
?>
