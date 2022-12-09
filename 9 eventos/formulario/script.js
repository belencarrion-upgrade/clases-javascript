'use strict';

const check = document.getElementById('check');
check.addEventListener('change', mostrarPassword);

function mostrarPassword(event){
    // voy a ver si el check está marcado
    // event.target = check
    const password = document.getElementById('password');
    // el atributo checked nos dice si está marcado
    if(event.target.checked == true){
        console.log('mostrar el texto de la contraseña');
        password.type = 'text';
    }
    else {
        console.log('mostrar los puntitos');
        password.type = 'password';
    }
}

document.querySelector('#nombre').addEventListener('change', saludar);
function saludar(event){
    // event.target es el elemento que ha lanzado el evento
    // es decir, event.target es el input del nombre
    let nombre = event.target.value; // value nos da valor del input
    const saludo = document.querySelector('#saludo');
    if(nombre==''){
        // si no tengo nada en el input
        event.target.classList.add('border-red');
        saludo.style.display = 'none';
    }
    else {
        // si ha rellenado el usuario, saluda
        saludo.innerText='Hola, '+nombre;
        saludo.style.display = 'block';
        event.target.classList.remove('border-red');
    }
}