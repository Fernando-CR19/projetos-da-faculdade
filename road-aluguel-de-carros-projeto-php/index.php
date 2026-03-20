 <?php
session_start();

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alugue aqui</title>
    <link rel="stylesheet" href="./css/main.css">
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
                </ul>
            </nav>
        </div>
    </header>
    <section class="section">
        <div class="content">
            <div class="contentFluid">
                <h2>Alugue um carro</h2>
                <form action="">
                    <div class="pickUpLocation">
                        <label>Local de Retirada</label>
                        <input type="text" placeholder="Onde você quer alugar?">
                    </div>
                    <div>
                        <label>Data e Hora de Retirada</label>
                        <input type="date" name="" id="">
                    </div>
                    <div>
                        <label>Data e Hora de Devolução</label>
                        <input type="date" name="" id="">
                    </div>
                    <a href="produtos.php" class="button searchButton">
                        Buscar
                    </a>
                </form>
            </div>
        </div>
    </section>
    <section>
        <div class="banners">
            <div class="bannersTablet">
                <h2>Razões para alugar na Road</h2>
                <h3>Confira os nossos diferenciais:</h3>
            </div>
            <div class="cardContent">
                <div class="card">
                    <img src="./imagens/carroModerno.jpg" alt="Carros modernos" class="cardImg">
                    <h5>Os carros mais novos e modernos</h5>
                    <p>Escolha o carro perfeito para você.</p>
                    <a href="">Confira os modelos &rarr;</a>
                </div>
                <div class="card">
                    <img src="./imagens/novidades.jpg" alt="Novidades" class="cardImg" >
                    <h5>Novidades Road!</h5>
                    <p>Acesse nosso canal e fique por dentro de tudo que acontece na Movida!</p>
                    <a href="">Confira nosssas novidades &rarr;</a>
                </div>
                <div class="card">
                    <img src="./imagens/empresaB.webp" alt="Novidades" class="cardImg" >
                    <h5>Somos uma empresa B!</h5>
                    <p>Somos uma empresa com certificação de empresa B.</p>
                    <a href="">Confira nosssas novidades &rarr;</a></div>
                <div class="card">
                    <img src="./imagens/lojas.png" alt="Nossas Lojas" class="cardImg" >
                    <h5>Nossas Lojas</h5>
                    <p>Presente nas principais cidades e aeroportos do Brasil.</p>
                    <a href="">Confira nosssas novidades &rarr;</a></div>
                </div>
            </div>
        </div>
        <div class="promotions">
            <h3>Promoções para você</h3>
            <div class="promotionsList">
                <img src="./imagens/promocoes.webp" alt="promoção 1">
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="about">
            <a href=""><h5>Sobre Road</h5></a>
            <p>© 2023 - Todos os direitos reservados</p>
            <a href="">Termos de uso | Políticas de privacidade</a>
            <p href="">Fernando Chaves</p>
            <p>CNPJ: 79.139.505/0001-91</p>
        </div>
        <div class="contact">
            <h5>Dúvidas ou quer falar conosco?</h5>
            <p>Se quiser falar conosco ou tirar dúvidas sobre o seu aluguel envie um e-mail para: chavesfernando659@gmail.com</p>
        </div>
        <div class="doubts">
            <h5>Dúvidas sobre o pagamento?</h5>
            <p>O pagamento por cartão ou pix pode levar até 2 horas</p>
            <p>Em caso de boleto até 3 dias úteis</p>
        </div>
    </footer>
</body>
    <script src="./js/main.js"></script>
</html>