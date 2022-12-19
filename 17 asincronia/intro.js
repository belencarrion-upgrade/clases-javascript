'use strict';

setTimeout(()=>{
    console.log('mensaje 1');
}, 1000); // espera 1 segundo a mostrar mensaje 1

setTimeout(()=>{
    console.log('mensaje 2');
}, 2000); // espera 2 segundos a mostrar mensaje 2

setTimeout(()=>{
    console.log('mensaje 3');
}, 500); // espera medio segundo a mostrar mensaje 3

console.log('mensaje 4');