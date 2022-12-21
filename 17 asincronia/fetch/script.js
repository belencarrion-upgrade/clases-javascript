'use strict';

// fetch('https://jsonmock.hackerrank.com/api/movies/')
//     .then(response => response.json())
//     .then(response => {
//         console.log(response);
//     });

// async function obtenerDatos(){
//     const respuesta = await fetch('https://jsonmock.hackerrank.com/api/movies/');
//     const datos = await respuesta.json();
//     console.log(datos);
// }

// obtenerDatos();

function obtenerImagen(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(response=>{
            const imagen = document.querySelector('img');
            imagen.src= response.message;
        });
}

document.querySelector('button').addEventListener('click', obtenerImagen);

function predecirEdad(nombre){
fetch(`https://api.agify.io?name=${nombre}`)
    .then(response=>response.json())
    .then(response=>{
        console.log(`Si te llamas ${nombre}, probablemente tengas ${response.age} años`)
    });
}

predecirEdad('belen');
predecirEdad('maría');
predecirEdad('juan');
predecirEdad('mateo');

fetch('https://api.adviceslip.com/advice')
    .then(response=>response.json())
    .then(response=>{
        console.log('random users');
        console.log(response);
    });