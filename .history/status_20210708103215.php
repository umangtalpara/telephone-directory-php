<?php
include('dbConnection.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata= json_decode($data,true);
$id = $mydata['sid'];
$status = $mydata['status'];

if(!empty($id)) {
    if($status = 1){
        $sql = "UPDATE info SET status = '0'  WHERE  id = {$id}";
        if($conn->query($sql) == TRUE){
            echo "info udate Successfully";
        }else{
            echo "info not updated";
        }
    }else{
        $sql = "update info set status = 1 where  id = {$id}";
        if($conn->query($sql) == TRUE){
            echo "info udate Successfully";
        }else{
            echo "info not updated";
        }
    }
   
    
}else{
    echo "unable to update info";
}


?>