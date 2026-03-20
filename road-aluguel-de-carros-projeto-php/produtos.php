<?php
session_start();

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Escolha seu veículo</title>
    <link rel="stylesheet" href="./css/produtos.css">
</head>

<body>
    <header class="header">
        <div class="headerContainer">
            <div class="headerLogo">
                <a href=""><img src="./imagens/logo.png" alt="Logo"></a>
            </div>
            <nav class="nav">
                <ul class="navUl">
                    <a href="./contato.php" target="_blanck"><li class="navLi">Contato</li></a>
                    <a href="./info.php"><li class="navLi">Ajuda</li></a>
                    <a href="./minhasReservas.php"><li class="navLi">Minhas reservas</li></a>
                    <?php
                    if(isset($_SESSION['user'])){
                        echo '<li class="navLi">' . $_SESSION['user'] . '</li>';
                        echo '<a href="logoff.php"><li class="navLi">Sair</li></a>';
                    }else{
                    ?>
                    <a href="login.php"><li class="navLi">Login</li></a>
                    <a href="./cadastrar.php"><li class="navLi">Cadastro</li></a>
                    <?php
                    }
                    ?>
                    <a href="javascript:history.back()"><li class="navLi">Voltar</li></a>
                </ul>
            </nav>
        </div>
    </header>
    <section class="mainContainer">
        <h1>Escolha seu veículo</h1>
        <div class="carContainer">
            <div class="classCar">
                <h3>Kwid - Road ON</h3>
            </div>
            <div class="car">
                <img src="./imagens/carro.png" alt="kwid">
                <div class="pay">
                    <p>R$ 63/dia</p>
                    <a href="pagar.php">Alugar agora</a>
                </div>
            </div>
        </div>
    </section>
</body>

</html>