import {toys, isBestSeller} from './toys.js';

console.log(toys);

const lista = document.querySelector('ul');
const tabla = document.querySelector('table');
for(let toy of toys){
    const item = document.createElement('li');
    item.innerText = toy.name;
    lista.append(item);

    const row = document.createElement('tr');
    for(let dato in toy){
        const cell = document.createElement('td');
        cell.innerText = toy[dato];
        if(isBestSeller(toy) && dato=='name'){
            cell.innerHTML += ' <i class="fa-solid fa-star text-warning"></i>';
        }
        row.append(cell);
    }
    tabla.append(row);
}