<?php
session_start();
$conn = mysqli_connect("localhost", "root", "", "bd_auto");

if (!$conn){
    die("Connection failed:" . mysqli_connect_error());
}

$sql = "SELECT * FROM aluguelcarro";
$result = $conn->query($sql);

$data = array();
if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode($data); 
}

$conn->close();