const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

//Simulacion de credenciales de acceso
const validUsername = 'yoana';
const validPassword = '12345';

form.addEventListener('submit' , function(e) {
    e.preventDefault();

    const enterdUsername = usernameInput.value.trim();
    const enterdPassword = passwordInput.value;

    if (enterdUsername === validUsername && enterdPassword === validPassword ) {
        alert('Inicio de sesión exitoso!')
        //Redirige a la pagina 
        window.location.href = '/CRUD/index.html';
    }else{
        alert('Credenciales incorrectas')
    }
})
