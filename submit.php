<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect data from POST request
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $dob = htmlspecialchars($_POST['dob']);
    $gender = htmlspecialchars($_POST['gender']);

    // Display the formatted response
    echo "<h2>Form Submitted Successfully!</h2>";
    echo "<p><strong>Full Name:</strong> $name</p>";
    echo "<p><strong>Email Address:</strong> $email</p>";
    echo "<p><strong>Phone Number:</strong> $phone</p>";
    echo "<p><strong>Date of Birth:</strong> $dob</p>";
    echo "<p><strong>Gender:</strong> $gender</p>";
} else {
    echo "<p style='color:red;'>Invalid request.</p>";
}
?>