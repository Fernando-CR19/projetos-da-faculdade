<?php
session_start();
$conn = mysqli_connect("localhost", "root", "","bd_auto");
if (!$conn) {
    echo("Deu ruim!!");
}
echo("Conexão criada com sucesso!!");


$email = $_POST["email"];
$senha = $_POST["senha"];

$sql = "SELECT user,id FROM usuario WHERE email = '$email' AND senha = '$senha'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_array($result);
    $_SESSION['user'] = $row['user'];
    $_SESSION['id'] = $row['id'];

    header('Location: http://localhost/ProjetoPHP/Projeto_v6.0/index.php');
} else {
    echo("Email ou senha inválidos!!");
    header('Location: http://localhost/ProjetoPHP/Projeto_v6.0/login.php');
}
?>