// Atualizar

document.getElementById('btnAtt').addEventListener('click', function() {
    var altFormContainer = document.getElementById('altFormContainer');
    if (altFormContainer.classList.contains('hidden')) {
        altFormContainer.classList.remove('hidden');
    } else {
        altFormContainer.classList.add('hidden');
    }
});

// Deletar

document.getElementById('btnDel').addEventListener('click', function() {
    var altFormContainer = document.getElementById('deleteFormContainer');
    if (altFormContainer.classList.contains('hidden')) {
        altFormContainer.classList.remove('hidden');
    } else {
        altFormContainer.classList.add('hidden');
    }
});