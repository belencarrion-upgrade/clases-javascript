'use strict';

/*
ALGUNAS APIS
------------
https://jsonmock.hackerrank.com/api/movies/
https://dog.ceo/api/breeds/image/random
https://api.agify.io?name=laura
https://api.adviceslip.com/advice
*/

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        console.log('todo ha ido bien');
        console.log(respuesta);
    })
    .catch(respuesta => {
        console.log('algo ha fallado');
        console.log(respuesta);
    });

async function obtenerDatos(){
    try{
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const datos = await respuesta.json();
        console.log(datos);
    }
    catch(error){
        console.log('algo ha fallado');
        console.log(error);
    }
}

obtenerDatos();

async function obtenerImagen(){
    try{
        const respuesta = await fetch("https://dog.ceo/api/breeds/image/random");
        const datos = await respuesta.json();
        console.log(datos);
        const imagen = document.querySelector('img');
        imagen.src = datos.message;
    }
    catch(error){
        console.log('algo ha fallado');
        console.log(error);
    }
}

obtenerImagen();

document.querySelector('button').addEventListener('click', obtenerImagen);

function predecirEdad(nombre){
    // fetch("https://api.agify.io/?name="+nombre) // https://api.agify.io/?name=belen
    fetch(`https://api.agify.io/?name=${nombre}`) // https://api.agify.io/?name=belen
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            console.log(`si te llamas ${nombre}, probablemente tengas ${respuesta.age} años`);
            // console.log('si te llamas '+nombre+', probablemente tengas '+respuesta.age+' años');
        })
        .catch(respuesta => {
            console.log('algo ha fallado');
            console.log(respuesta);
        });
}
predecirEdad('Belén');
predecirEdad('Miguel');
predecirEdad('Lola');