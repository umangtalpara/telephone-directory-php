<?php
include('dbConnection.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata= json_decode($data,true);
$id = $mydata['sid'];


if(!empty($id)) {
    $sql = update info set status = true where isSuccessful = false;
    if($conn->query($sql) == TRUE){
        echo "info udate Successfully";
    }else{
        echo "info not updated";
    }
}else{
    echo "unable to delete info";
}


?>