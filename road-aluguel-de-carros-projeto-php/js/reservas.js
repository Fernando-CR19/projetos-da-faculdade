const url = "listarReservas.php"

fetch(url) 
    .then(resposta => resposta.json())
    .then(resposta => console.log(resposta)) 
    .catch(console.error("Não carrega!")); 