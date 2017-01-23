<?php
$user = json_decode($_POST["user"]);
$nachricht = $user->{'name'}. ": \r\n" . $user->{'text'};
$nachricht = wordwrap($nachricht, 70);

$empfaenger = 'summon-helper@hotmail.com';
$betreff = $user->{'type'};
$header = 'From: '. $user->{'email'} . "\r\n" .
    'Reply-To:'. $user->{'email'} . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

echo mail($empfaenger, $betreff, $nachricht, $header);
?>