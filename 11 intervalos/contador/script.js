'use strict';

let contador = 0;
const aumentarSegundos = () => {
    contador++;
    const segundos = document.querySelector('#segundos');
    segundos.innerText = contador;
}

const limpiarContador = () => {
    contador = 0;
    segundos.innerText = contador;
}

setInterval(aumentarSegundos, 1000);

const boton = document.querySelector('.btn');
boton.addEventListener('click', limpiarContador);