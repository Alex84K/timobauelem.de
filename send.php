<?php

$token = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
          
$chat_id = "XXXXXXXX";

if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);
    $email = ($_POST['email']);

    $arr = array(
        'Name:' => $name,
        'Tel:' => $phone,
        'email:' => $email
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    if ($sendToTelegram) {
        alert('Thank you! Your application is accepted. We will contact you shortly.');
    }

    else {
        alert('Something went wrong. Please try submitting the form again.');
    }
}

?>
