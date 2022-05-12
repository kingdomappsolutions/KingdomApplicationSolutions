<?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = testInput($_POST["Name"]);
      $email = testInput($_POST["Email"]);
      $option = testInput($_POST["Option"]);
      $message = testInput($_POST["Message"]);
    }

    function testInput($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

	$formcontent="From: $name \n\n Email Address: $email \n\n Subject: $option \n\n Message: $message";
	$recipient = "justin@kingdomappsolutions.tech";
	$subject = "Contact Form Submission";
	$mailheader = "From: $name <$email> \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	header("Location:https://kingdomappsolutions.tech/success.html");
?>