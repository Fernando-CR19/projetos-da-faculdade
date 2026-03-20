//// ADICIONAR ////

document.getElementById('showFormBtn').addEventListener('click', function() {
    var formContainer = document.getElementById('formContainer');
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
    } else {
        formContainer.classList.add('hidden');
    }
});

//// ALTERAR ////

document.getElementById('altBtn').addEventListener('click', function() {
    var altFormContainer = document.getElementById('altFormContainer');
    if (altFormContainer.classList.contains('hidden')) {
        altFormContainer.classList.remove('hidden');
    } else {
        altFormContainer.classList.add('hidden');
    }
});

//// DELETAR ////

document.getElementById('deleteBtn').addEventListener('click', function() {
    var deleteFormContainer = document.getElementById('deleteFormContainer');
    if (deleteFormContainer.classList.contains('hidden')) {
        deleteFormContainer.classList.remove('hidden');
    } else {
        deleteFormContainer.classList.add('hidden');
    }
});