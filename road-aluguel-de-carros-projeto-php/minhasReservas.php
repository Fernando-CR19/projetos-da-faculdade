<?php
session_start();
    $conn = mysqli_connect("localhost", "root", "", "bd_auto");
    $sql = "SELECT * FROM aluguelCarro ORDER BY id DESC";
    $result = $conn-> query($sql);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>minhas Reservas</title>
    <link rel="stylesheet" href="./css/reservas.css">
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
    <section class="section">
        <div class="btnList">
            <button class="btn btnAtt" id="btnAtt">Atualizar</button>
            <button class="btn btnDel" id="btnDel">Deletar</button>
        </div>
        <div id="altFormContainer" class="hidden">
            <h2 class="h2">Atualizar Informações</h2>
            <form class="altForm" method="POST" action="atualizar.php">
                <fieldset class="altFieldset">
                    <label class="labelId">Id:</label>
                    <input type="text" id="altId" name="id" pattern="\d*" oninput="this.value = this.value.replace(/[^0-9]/g, '');" required>
                    <label class="labelCarro">Carro:</label>
                    <input type="text" id="carro" name="carro" required>
                    <label class="labelRetirada">Local de Retirada:</label>
                    <input type="text" id="localDeRetirada" name="localDeRetirada" required>
                    <label class="labelDevolucao">Local de Devolução:</label>
                    <input type="text" id="localDeDevolucao" name="localDeDevolucao" required>
                    <label class="labelDiaRetirada">Dia de Retirada:</label>
                    <input type="text" id="diaDeRetirada" name="diaDeRetirada" maxlength="10" minlength="10" pattern="\d{4}-\d{2}-\d{2}" required>
                    <label class="labelDiaDevolucao">Dia de Devolução:</label>
                    <input type="text" id="diaDeDevolucao" name="diaDeDevolucao" maxlength="10" minlength="10" pattern="\d{4}-\d{2}-\d{2}" required>
                    <label class="labelDiaria">Diária:</label>
                    <input type="text" id="diaria" name="diaria" pattern="\d*" oninput="this.value = this.value.replace(/[^0-9]/g, '');" required>
                    <button type="submit" id="alter">Atualizar</button>
                </fieldset>
            </form>
        </div>
        <div id="deleteFormContainer" class="hidden">
            <h2 class="h2">Cancelar Aluguel</h2>
            <form class="deleteForm" method="POST" action="deletar.php">
                <fieldset class="deleteFieldset">
                    <label>ID:</label>
                    <input type="text" id="id" name="id" pattern="\d*" oninput="this.value = this.value.replace(/[^0-9]/g, '');" required>
                    <button type="submit" id="delete">Apagar</button>
                </fieldset>
            </form>
        </div>
        <table class="table">
            <tr class="tableRow">
                <th class="tableTitle">id</th>
                <th class="tableTitle">Carro</th>
                <th class="tableTitle">Local de Retirada</th>
                <th class="tableTitle">Local de Devolução</th>
                <th class="tableTitle">Data de Retirada</th>
                <th class="tableTitle">Data de Devolução</th>
                <th class="tableTitle">Diária</th>
            </tr>
              <tbody>
                <?php
                if (isset($_SESSION['user'])) {
                    while($user_data = mysqli_fetch_assoc($result))
                    {
                        echo "<tr class='tableRow'>";
                        echo "<td class='tableContent'>".$user_data['id']. "</td>";
                        echo "<td class='tableContent'>".$user_data['carro']. "</td>";
                        echo "<td class='tableContent'>".$user_data['localDeRetirada']. "</td>";
                        echo "<td class='tableContent'>".$user_data['localDeDevolucao']. "</td>";
                        echo "<td class='tableContent'>".$user_data['diaDeRetirada']. "</td>";
                        echo "<td class='tableContent'>".$user_data['diaDeDevolucao']. "</td>";
                        echo "<td class='tableContent'>".$user_data['diaria']. "</td>";
                        echo "</tr>";
                    }
                }
                ?>
              </tbody>
        </table> 
    </section>
</body>
    <script src="./js/reservas.js"></script>
    <script src="./js/scriptButton.js"></script>
    <script src="./js/validacoes.js"></script>
</html>