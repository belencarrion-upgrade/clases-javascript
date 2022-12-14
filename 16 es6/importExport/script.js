import {nombre, toys, isBestSeller} from './toys.js';

console.log(nombre);
console.log(toys);

const lista = document.querySelector('ul');
const tabla = document.querySelector('table');
for(let toy of toys){
    const li = document.createElement('li');
    li.innerHTML = `<strong>${toy.name}</strong> (${toy.sellCount})`;
    lista.append(li);

    const fila = document.createElement('tr');
    for(let propiedad in toy){
        const celda = document.createElement('td');
        celda.innerHTML = toy[propiedad];
        if(isBestSeller(toy) && propiedad=='name'){
            celda.innerHTML += ' <i class="fa-solid fa-star text-warning"></i>';
        }
        fila.append(celda);
    }
    tabla.append(fila);
}

