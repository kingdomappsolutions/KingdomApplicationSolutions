<?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = testInput($_POST["Name"]);
      $email = testInput($_POST["Email"]);
      $option = testInput($_POST["Option"]);
      $message = testInput($_POST["Message"]);
      $answer = testInput($_POST["Answer"]);
    }

    function testInput($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

    if ($answer == 13 || $answer == 12 || $answer == 'd' || $answer == 50 || $answer == 16 || $answer == 'h' || $answer == 6 || $answer == 19 || $answer == 'n' || $answer == 2) {
        $formcontent="From: $name \n\n Email Address: $email \n\n Subject: $option \n\n Message: $message";
        $recipient = "justin@kingdomappsolutions.tech";
        $subject = "Contact Form Submission";
        $mailheader = "From: $name <$email> \r\n";
        mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
        header("Location:https://kingdomappsolutions.tech/success.html");
    } else {
        header("Location:https://kingdomappsolutions.tech");
    }

?>