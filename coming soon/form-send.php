<?php
$to = "info@eden-ba.com"; // This is your Email address
$from = $_POST['email']; // This is the sender's Email address
$first_name = $_POST['name']; // This is the sender's Name
$comments = $_POST['comments'];
$subject = "Email de pagina eden-ba";
$comments = "Nombre: $first_name \n
            Mensaje: $comments ";
$headers = "From:" . $from;
$email = mail($to,$subject,$comments,$headers);
if(!$email){
  echo "Hubo un error al procesar tu email, detalle del error". $email; 
}
header('Location: thanks.html');
exit();
?>
