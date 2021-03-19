<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$mail = $_POST['newsletter-mail'];

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name <br>
<b>Телефон:</b> $phone <br><br>
<b>Сообщение:</b><br> $message
";
$newsletterBody = "
<h2>Новое письмо</h2>
<b>Mail:</b> $mail <br>
";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'mail.iljalobossok.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'besttourplan@iljalobossok.ru'; // Логин на почте
    $mail->Password   = '3J2s4W5f'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->SMTPAutoTLS = false;
    $mail->SMTPSecure = false;
    $mail->Port       = 25;
    $mail->setFrom('besttourplan@iljalobossok.ru', 'Ilja Lobossok'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('iljalobossok@gmail.com');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    if (empty($name) && empty($phone) && empty($message)){
      $mail->Body = $newsletterBody; 
    } else{
      $mail->Body = $body;
    }
    
    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if (empty($name) && empty($phone) && empty($message)){
      header('Location: subscribe.html');
    } else{
      header('Location: thankyou.html');
    }
