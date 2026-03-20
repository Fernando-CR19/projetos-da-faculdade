<?php 

require 'conexao1.php';

if(isset($_SESSION['idUser']) && !empty($_SESSION['idUser'])){

    require_once 'Usuario.class.php';
    $u = new Usuario();
       
    $listLogeed = $u->logged($_SESSION['idUser']);

    echo $listLogeed['nome'];

}else{
    header("Location: login.php");
}

?>