<?php

require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
   
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

  

    if(empty($name) || empty($email) || empty($name) || empty($phone)) {
        die("le nom et l'email sont obligatoires.");
    }
  

    try{
        $stmt = $pdo->prepare("INSERT INTO user(name, email,   phone, message  ) VALUES (:name, :email, :phone,  :message
        )"); 
        $stmt->execute([
            ":name"=> $name,
            ":email"=> $email,
          
            ":phone"=>$phone,
            ":message"=>$message,
        
           
        ]);

        echo "Donnees insereers avec succes !<br>";
       

    } catch (PDOException $e) {
        die("Errur lors de l'insertion des donnees". $e->getMessage());
    }
} else {
    die("Acces direct non autorise.");
}
?>