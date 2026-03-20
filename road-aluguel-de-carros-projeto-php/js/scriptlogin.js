document.getElementById('btnlogin').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; // Retrieve existing data or initialize as empty array
    var data = {
        email: email,
    };

    usuarios.push(data);

    localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Store the updated data
});