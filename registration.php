<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Validate password confirmation
    if ($password !== $confirm_password) {
        echo "Passwords do not match!";
        exit();
    }

    // Here you can insert data into a database or validate the email/password

    echo "Registration successful!";
    // You could redirect or save the data to a database
}
?>
