'use strict';

function filtrarLista(event){
    const valor = event.target.value;
    console.log('filtrar lista', valor);
    const elementos = document.querySelectorAll('#articulos li');
    for(let elemento of elementos){
        if(elemento.innerText.toLowerCase().includes(valor.toLowerCase())){
            console.log(elemento.innerText, 'SI');
            elemento.style.display = 'list-item';
        }
        else {
            console.log(elemento.innerText, 'NO');
            elemento.style.display = 'none';
        }
    }
}

document.querySelector('#buscador').addEventListener('keyup', filtrarLista);