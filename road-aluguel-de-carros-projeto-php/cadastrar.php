<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de cliente</title>
    <link rel="stylesheet" href="./css/cadastro.css">
</head>

<body>
    <header class="header">
        <div class="headerContainer">
            <div class="headerLogo">
                <a href="index.php"><img src="./imagens/logo.png" alt="Logo"></a>
            </div>
            <nav class="nav">
                <ul class="navUl">
                    <a href="./contato.php">
                        <li class="navLi">Contato</li>
                    </a>
                    <a href="./info.php">
                        <li class="navLi">Ajuda</li>
                    </a>
                    <a href="./minhasReservas.php">
                        <li class="navLi">Minhas reservas</li>
                    </a>
                    <a href="login.php">
                        <li class="navLi">Login</li>
                    </a>
                    <a href="./cadastrar.php">
                        <li class="navLi">Cadastro</li>
                    </a>
                    <a href="javascript:history.back()">
                        <li class="navLi">Voltar</li>
                    </a>
                </ul>
            </nav>
        </div>
    </header>
    <div class="container">
        <section class="test">
            <h2>Cadastro</h2>
        </section>
        <form class="form" method="POST" action="cadastro.php">
            <fieldset class="form-content">
                <label for="username">User name:</label>
                <input type="text" id="username" name="user" required>
                <label for="name">Seu Nome:</label>
                <input type="text" id="name" name="nome" pattern="[A-Za-zÀ-ÿ\s]+" oninput="validateName()" required>
                <label for="cpf">Seu CPF:</label>
                <input type="text" id="cpf" name="cpf" pattern="\d*" minlength="11" maxlength="11" oninput="this.value = this.value.replace(/[^0-9]/g, '');" required>
                <label for="email">Seu E-mail:</label>
                <input type="email" id="email" name="email" required>
                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required>
                <label for="telefone">Telefone:</label>
                <input type="text" id="telefone" name="telefone" pattern="\d*" minlength="11" maxlength="11" oninput="this.value = this.value.replace(/[^0-9]/g, '');" required>
                <label for="password">Senha:</label>
                <input type="password" id="password" name="senha" maxlength="8" minlength="8" pattern="[a-zA-Z0-9]*" oninput="this.value = this.value.replace(/\s/g, '')" required>
                <button type="submit">Cadastrar</button>
            </fieldset>
        </form>
    </div>
</body>
    <script src="./js/validacoes.js"></script>
</html>