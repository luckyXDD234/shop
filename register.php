<?php
$name = $_POST['name'];    
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$age = $_POST['age'];
$email = $_POST['email'];
$password = $_POST['password'];

if(!empty($name) || !empty($phone) || !empty($gender) || !empty($age) ||
 !empty($email) || !empty($password)){
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "tom's shop";

// create connection keyword mysqli
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connect_error()){
        die('connection error! Please try again later('. mysqli_connect_errno().'))'. mysqli_connect_error());
    } else {
        $SELECT = "Select email from customer where email = ? Limit 1";
        $INSERT = "Insert into customer(name, phone, gender, age, email, password)
        value(?, ?, ?, ?, ?, ?)";
    
        //prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

            if ($rnum==0){
                $stmt->close();
                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param("sisiss", $name, $phone, $gender, $age, $email, $password);
                $stmt->execute();
                echo "Your have registered successfully.";
            }else{
                echo "This email has already been registered.";
            }
    }
 }  else{
     echo "Please enter all the information!";
     die();
 }
?>