<?php
$email = $_POST['email'];
$password = $_POST['password'];

if(!empty($name) || !empty($password)){
$host = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbname = "tom's shop";

// create connection keyword mysqli
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
if (mysqli_connect_error()){
    die('connection error! Please try again later('. mysqli_connect_errno().'))'. mysqli_connect_error());
} else {
    
    $result = mysqli_query("select * from customer where email = '$email' and password = '$password'");
    $row = mysql_fetch_array($result);
    echo "row";
    if (($row['email'] == $email) && ($row['password'] == $password)){
        echo "Login in success!"; 
    } else {
        echo "Login in failed!";
    }


    
}
}
?>


