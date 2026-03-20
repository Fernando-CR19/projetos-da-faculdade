<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <header class="header">
        <div class="headerContainer">
            <div class="headerLogo">
                <a href="index.php"><img src="./imagens/logo.png" alt="Logo"></a>
            </div>
            <div class="btnVoltar">
                <a href="javascript:history.back()"><p>Voltar</p></a>
            </div>
        </div>
    </header>
    <div class="formContainer">
        <h1 class="h1">Login</h1>
        <form action="logar.php" method="POST" class="form">
            <fieldset class="fieldset">
                <label for="" class="email">E-mail:</label>
                <input type="email" name="email" placeholder="Seu Email:" required>
                <label for="" class="password">Senha:</label>
                <input type="password" name="senha" placeholder="Sua Senha:" maxlength="8" minlength="8" pattern="[a-zA-Z0-9]*" oninput="this.value = this.value.replace(/\s/g, '')" required>
                <button type="submit" class="btnLogin">Entrar</button>
            </fieldset>
        </form>
        <a href="cadastrar.php">
            <button class="btnCadastro">Cadastrar</button>
        </a>
    </div>
</body>

</html>