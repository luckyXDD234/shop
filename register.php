<?php
$name = $_POST['name']    
$phone = $_POST['phone']
$gender = $_POST['gender']
$age = $_POST['age']
$email = $_POST['email']
$password = $_POST['password']

if(!empty($name) || !empty($phone) || !empty($gender) || !empty($age) ||
 !empty($email) || !empty($password)){
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "Tom's shop";

// create connection keyword mysqli



 }  else{
     echo "Please enter all the information!"
     die();
 }




?>