<?php
session_start();
$conn = mysqli_connect("localhost", "root", "", "bd_auto");

$carro = trim($_POST['carro']);
$localDeRetirada = trim($_POST['localDeRetirada']);
$localDeDevolucao = trim($_POST['localDeDevolucao']);
$diaDeRetirada = trim($_POST['diaDeRetirada']);
$diaDeDevolucao = trim($_POST['diaDeDevolucao']);
$diaria = trim($_POST['diaria']);

$sql = "INSERT INTO aluguelCarro 
        (carro, localDeRetirada, localDeDevolucao, diaDeRetirada, diaDeDevolucao, diaria) 
        VALUES 
        ('$carro', '$localDeRetirada', '$localDeDevolucao', '$diaDeRetirada', '$diaDeDevolucao', '$diaria')";

$result = $conn->query($sql);

if ($result) {
    header("Refresh: 0; http://localhost/ProjetoPHP/Projeto_v6.0/minhasReservas.php");               
} else {
    header("Refresh: 0; http://localhost/ProjetoPHP/Projeto_v6.0/pagamento.php");
}
