<?php
    session_start();
    unset ($_SESSION['email']);
    unset ($_SESSION['senha']);
    unset ($_SESSION['nome']);
    unset ($_SESSION['id']);
    session_destroy();
    header('location: index.php');
    exit();
?>