function buscarDados() {
    fetch('http://127.0.0.1:5000/buscar', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Dados recebidos do servidor:', data);
    })
    .catch(error => {
        console.error(error.message);
    });
}

window.onload = function () {
    buscarDados();
};
