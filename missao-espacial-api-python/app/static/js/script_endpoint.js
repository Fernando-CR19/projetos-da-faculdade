//// POST ////

document.getElementById("formContainer").addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var releaseDate = document.getElementById("releaseData").value;
    var endpoint = document.getElementById("endpoint").value;
    var missionState = document.getElementById("missionState").value;
    var crew = document.getElementById("crew").value;
    var payload = document.getElementById("payload").value;
    var duration = document.getElementById("duration").value;
    var cost = document.getElementById("cost").value;
    var status = document.getElementById("status").value;

    var dados = {
        name: name,
        release_date: releaseDate,
        endpoint: endpoint,
        mission_state: missionState,
        crew: crew,
        payload: payload,
        duration: duration,
        cost: cost,
        status: status
    }
    console.log(dados)
    // Realizar requesição AJAX para API
    fetch("http://127.0.0.1:5000/criar", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    // Tratamento da resposta da requisição
    .then(response => {
        alert('Sucesso ao criar missão');
        console.log(response.text());
        window.location.reload(true);
    })
    .catch(error => {
        alert('Erro ao criar missão');
        console.log("Error:", error);
        window.location.reload(true);
    });
});


/// PUT ///
document.getElementById("altFormContainer").addEventListener('submit', function(event) {
    event.preventDefault();

    var id = document.getElementById("altId").value;
    var name = document.getElementById("altName").value;
    var releaseDate = document.getElementById("altReleaseData").value;
    var endpoint = document.getElementById("altEndpoint").value; // Alterado para "altEndpoint"
    var missionState = document.getElementById("altMissionState").value;
    var crew = document.getElementById("altCrew").value;
    var payload = document.getElementById("altPayload").value;
    var duration = document.getElementById("altDuration").value;
    var cost = document.getElementById("altCost").value;
    var status = document.getElementById("altStatus").value;

    var dados = {
        id: id,
        name: name,
        release_date: releaseDate,
        endpoint: endpoint,
        mission_state: missionState,
        crew: crew,
        payload: payload,
        duration: duration,
        cost: cost,
        status: status
    }

    console.log(dados);
    // Realizar requesição AJAX para API
    fetch("http://127.0.0.1:5000/atualizar", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    // Tratamento da resposta da requisição
    .then(response => {
        alert('Sucesso ao atualizar a missão');
        console.log(response.text());
        window.location.reload(true);
    })
    .catch(error => {
        alert('Erro ao atualizar a missão');
        console.log("Error:", error);
        window.location.reload(true);
    });
});

/// DELETE ///

document.getElementById("deleteFormContainer").addEventListener('submit', function(event) {
    event.preventDefault();

    var id = document.getElementById('id').value;

    var dados = {
        id: id
    }
    console.log(dados)
    // Realizar requesição AJAX para API
    fetch("http://127.0.0.1:5000/deletar", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    // Tratamento da resposta da requisição
    .then(response => {
        alert('Sucesso ao deletar a missão');
        console.log(response.text());
        window.location.reload(true);
    })
    .catch(error => {
        alert('Falha ao deletar missão');
        console.log('Error:', error);
        window.location.reload(true);
    })
});