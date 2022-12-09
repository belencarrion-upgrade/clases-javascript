'use strict';

const corazones = document.querySelectorAll('.corazon');
for(let corazon of corazones){ // como ahora es un array, se lo añado a cada uno
    console.log(corazon);
    // le añado un evento al elemento corazon
    // tipo: click
    // función que va a ejecutar: handleClick
    corazon.addEventListener('click', handleClick);
}

let clicks = 0;
function handleClick(e) {
    clicks++;
    document.querySelector('#clicks').innerText = clicks; // lo saco del dom porque es independiente del elemento en el que he hecho click
    // event tiene los datos del evento
    console.log(e);
    const corazon = document.querySelector('.corazon');
    // event.target tiene el elemento sobre el que hemos pinchado
    e.target.classList.toggle('fa-regular'); // quito la clase fa-regular
    e.target.classList.toggle('fa-solid'); // añado la clase fa-solid
    e.target.classList.toggle('text-red'); // añado la clase para que salga en rojo
    // toggle alterna las clases. si no la tengo, la añade. si la tengo, la quita
}