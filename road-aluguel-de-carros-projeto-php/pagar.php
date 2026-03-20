<?php
session_start();

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pague Agora</title>
    <link rel="stylesheet" href="./css/pagar.css">
</head>

<body>
    <header class="header">
        <div class="headerContainer">
            <div class="headerLogo">
                <a href="./index.php"><img src="./imagens/logo.png" alt="Logo"></a>
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
    <section>
        <form class="form" method="POST" action="pagamento.php">
            <fieldset class="form-content">
                <label for="carro">Carro:</label>
                <input type="text" name="carro" id="carro" placeholder="Renault Kwid" required>
                <label for="localDeRetirada">Local de Retirada:</label>
                <input type="text" id="localRetirada" name="localDeRetirada" placeholder="Av. Senador Fernandes Távora, 137 - Jóquei Clube, Fortaleza - CE" required>
                <label for="localDeDevolucao">Local de Devolução:</label>
                <input type="text" id="localDevolucao" name="localDeDevolucao" placeholder="Av. Senador Fernandes Távora, 137 - Jóquei Clube, Fortaleza - CE" required>
                <label for="diaDaRetirada">Dia da Retirada:</label>
                <input type="text" id="diaRetirada" name="diaDeRetirada" placeholder="2024-06-12" maxlength="10" minlength="10" pattern="\d{4}-\d{2}-\d{2}" required>
                <label for="diaDaDevolucao">Dia da Devolução:</label>
                <input type="text" id="diaDevolucao" name="diaDeDevolucao" placeholder="2024-06-13" maxlength="10" minlength="10" pattern="\d{4}-\d{2}-\d{2}" required>
                <label for="diaria">Diária:</label>
                <input type="text" id="diaria" name="diaria" placeholder="63" pattern="\d*" oninput="this.value = this.value.replace(/[^0-9]/g, '');" required>
                <button type="submit" class="renting">Alugar</button>
            </fieldset>
        </form>
    </section>
</body>
    <script src="./js/validacoes.js"></script>
</html>