<?php

$recepient = "text@inbox.ru";
$sitename = "Дальневосточный гид";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$smi = trim($_POST["smi"]);
$position = trim($_POST["position"]);
$company = trim($_POST["company"]);
$site = trim($_POST["site"]);
$message = "Имя: $name \nТелефон: $phone \nE-mail: $mail \nНазвание СМИ: $smi \nДолжность: $position \nНаименование компании: $company \nСайт компании: $site";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");