<?php

$recepient = "oscardevelopment2015@gmail.com";
$sitename = "OSCAR development";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);

$headers =  'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'From: '. $name . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

$pagetitle = "Нова завка з сайту $sitename";
$message = "Перезвоніть мені будь=-ласка"."<br>"."Ім'я: $name \nТелефон: $phone ";
mail($recepient, $pagetitle, $message, $headers);