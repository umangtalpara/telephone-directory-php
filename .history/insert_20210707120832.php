<?php
include('dbConnection.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata= json_decode($data,true);
$name = $mydata['name'];
$number =$mydata['number'];

if(!empty)

?>