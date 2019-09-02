const logueo = document.getElementById('logueo');
const registro = document.getElementById('registro');
const registrarte = document.getElementById('registrarte');
const errorRegistro = document.getElementById('error-registro');
const inicio = document.getElementById('inicio');
const bienvenida = document.getElementById('bienvenida');
const modal = document.getElementById('modal')
const cerrar = document.getElementById('cerrar')
    // Este es el punto de entrada de tu aplicacion
    // import { myFunction } from './lib/index.js';

// myFunction();
const registrar = document.getElementById('registrar');
const ingresar = document.getElementById('ingresar');
const registroExisto = document.getElementById('registro-exitoso');

//Pantalla de publicaciones
const publicarPost = document.getElementById('publicar-post');
const postPublicado = document.getElementById('post-publicado');

//array para almacenar datos registrados.
let users = [];
let arrayPost = [];

registrar.addEventListener('click', () => {
    logueo.classList.add('hide');
    inicio.classList.add('hide');
    registro.classList.remove('hide');
});

const validarEmail = (email) => {
    const expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return expr.test(email);
};

registrarte.addEventListener('click', (e) => {
    e.preventDefault();
    let name = document.getElementById('name')
    let newEmail = document.getElementById('new-email')
    let newPassword = document.getElementById('new-password')
    if (validarEmail(newEmail.value) && newPassword.value.length >= 8) {
        users.push({ nameUser: name.value, emailUser: newEmail.value, passwordUser: newPassword.value });
        name.value = '';
        newEmail.value = '';
        newPassword.value = '';
        console.log(users);
        localStorage.setItem('users', JSON.stringify(users));
        modal.classList.remove('hide');
        registro.classList.add('hide');
        inicio.classList.add('hide');
        logueo.classList.remove('hide');


    } else {
        errorRegistro.innerHTML = '• Debes ingresar un correo electrónico válido <br> • La contraseña debe tener más de 8 carácteres'
    }
})

// Evento para loguearse
ingresar.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const usersLocalStorage = JSON.parse(localStorage.getItem('users'));
    console.log(usersLocalStorage);
    console.log(email)
    console.log(password);

    for (let i = 0; i < localStorage.length; i++) {
        if (usersLocalStorage[i].emailUser === email && usersLocalStorage[i].passwordUser === password) {
            inicio.classList.remove('hide');
            logueo.classList.add('hide');
            bienvenida.innerHTML = usersLocalStorage[i].nameUser;
        } else {
            alert('correo o contraseña incorrectas');
        }

    }
});

document.getElementById('cerrar').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hide');
});
// const validarDatos = () => {
//     return JSON.parse(localStorage.getItem('users')).filter(users=>
//         users.length < 8)

//Evento para publicar post
publicarPost.addEventListener('click', () => {
    const postNuevo = document.getElementById('post-nuevo').value;
    arrayPost.push(postNuevo);
    localStorage.setItem('post', JSON.stringify(arrayPost));
    const arrLocalStorage = JSON.parse(localStorage.getItem('post'));
    const newArrayPost = arrayPost.concat(arrLocalStorage)
    for (let i = 0; i < newArrayPost.length; i++) {

        postPublicado.innerHTML = `<textarea id="post-publicado" cols="50" rows="10" >${newArrayPost[i]}</textarea>`;
    }

    // const newArrayPost = arrayPost.concat(arrLocalStorage)
    // if (arrLocalStorage != null && postNuevo != null) {
    // for (let i = 0; i < newArrayPost.length; i++) {

    //     postPublicado.innerHTML = newAarrayPost[i];

    // }

    // }


});




console.log(users);

// }
validarDatos(email, password);
console.log(users);