Thanks for your message!

<?php
	$to = "jmgallant301@gmail.com";
	$subject = "Email from my website";
	$body = "the user typed in: " . $_POST['email'];
	mail($to, $subject, $body);
?>