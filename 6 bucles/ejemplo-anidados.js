'use strict';

const personas  = [
    { nombre: 'Fulanito', apellido: 'Pérez', edad: 17, dni: '111A'},
    { nombre: 'Juan', apellido: 'López', edad: 18, dni: '222B'},
    { nombre: 'Pepe', apellido: 'Serna', edad: 19, dni: '333C'},
    { nombre: 'María', apellido: 'Jiménez', edad: 16, dni: '444D'},
    { nombre: 'Ana', apellido: 'Suárez', edad: 21, dni: '55D'},
];

const idsEliminar = ['111A','444D'];
for(let id of idsEliminar){
    console.log('eliminar elemento con dni ' +id);
    let posicion;
    for(let i=0; i<personas.length; i++){
        const persona = personas[i];
        if(persona.dni===id){
            posicion = i;
        }
    }
    console.log('eliminar elemento en la posición '+posicion);
    personas.splice(posicion,1);
}
console.log(personas);