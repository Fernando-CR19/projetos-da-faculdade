// validação do nome no cadastro do usuário
function validateName() {
    const input = document.getElementById('name');
    input.value = input.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
}


// Validação do dia de retirada e devolução do formulário de alugar um veículo
document.getElementById('diaRetirada').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^0-9-]/g, '');
});

document.getElementById('diaDevolucao').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^0-9-]/g, '');
});


// Validações das datas de retirada e devolução do formulário de alterar aluguel
document.getElementById('diaDeRetirada').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^0-9-]/g, '');
});

document.getElementById('diaDeDevolucao').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^0-9-]/g, '');
});