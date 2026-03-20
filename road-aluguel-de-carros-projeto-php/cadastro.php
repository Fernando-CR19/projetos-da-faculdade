<?php
session_start();
$conn = mysqli_connect("localhost", "root", "", "bd_auto");

$cpf = trim($_POST['cpf']);
$nome = trim($_POST['nome']);
$endereco = trim($_POST['endereco']);
$telefone = trim($_POST['telefone']);
$email = trim($_POST['email']);
$user = trim($_POST['user']);
$senha = trim($_POST['senha']);

$sql = "INSERT INTO usuario 
        (cpf, nome, endereco, telefone, email, user, senha) 
        VALUES 
        ('$cpf', '$nome', '$endereco', '$telefone', '$email', '$user', '$senha')";

$result = $conn->query($sql);

if ($result) {
    header("Refresh: 0; http://localhost/ProjetoPHP/Projeto_v6.0/login.php");               
} else {
    echo '<script>alert("Erro ao cadastrar cliente!");</script>';
    header("Refresh: 0; http://localhost/ProjetoPHP/Projeto_v6.0/cadastrar.php");
}

?>