<?php
    $conn = mysqli_connect("localhost", "root", "", "bd_auto");

    $id = trim($_POST['id']);
    
    $sql1 = "DELETE FROM aluguelcarro WHERE id = $id";

    $result = $conn -> query($sql1);
    if ($result){
        echo '<script>window.location.href = "minhasReservas.php"</script>';    
    } else {
        echo '<script>alert("O id informado não existe")</script>';
    }
