<?php

session_start();

$localhost = "localhost";
$user = "root";
$passw = "";
$banco = "bd_auto";

global $pdo;

// Oriented to objects with PDO

try {
    $pdo = new PDO("mysql:dbname=".$banco.";host=".$localhost, $user, $passw);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = $pdo->query("SELECT * FROM usuario");
    $sql->execute();

    echo $sql->rowCount();
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>