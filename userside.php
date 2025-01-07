<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.php"); // Redirect to login if not logged in
    exit();
}
?>
<h1>Welcome, <?php echo $_SESSION['user']; ?></h1>
