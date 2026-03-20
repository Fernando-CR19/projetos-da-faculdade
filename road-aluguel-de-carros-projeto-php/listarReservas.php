<?php

session_start();

$conn = mysqli_connect("localhost", "root", "","bd_auto");
$sql = "SELECT * FROM aluguelcarro"; 
$result = mysqli_query($conn, $sql);

if($result -> num_rows > 0){ 
    $data = array();
    while($row = $result -> fetch_assoc()){
        $data[] = $row;
    }
        echo json_encode($data);
    }

?>