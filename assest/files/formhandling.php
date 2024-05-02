<?php
include ('connection.php');


$Ffrom = $_POST['Ffrom'];
$Fto = $_POST['Fto'];
$name = $_POST['name'];
$phoneNumber = $_POST['phoneNumber'];
$email = $_POST['email'];
$date = $_POST['date'];
$message = $_POST['message'];


$sql = "INSERT INTO melbourne(Uname , form , where_to  , phone_number , email , fill_data , msg )  VALUES ('$Ffrom' , '$Fto' ,'$name' , $phoneNumber , '$email', '$date' , '$message')";

if ($conn->query($sql)) {
    echo json_encode(array('type' => true, 'msg' => 'Thank You! Our Team Contact You Soon'));
} else {
    echo json_encode(array('type' => false, 'msg' => 'Enter Inviled Please Check Details'));
}













?>