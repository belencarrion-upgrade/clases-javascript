const personas  = [
    { nombre: 'Fulanito', apellido: 'Pérez', edad: 17},
    { nombre: 'Juan', apellido: 'López', edad: 18},
    { nombre: 'Pepe', apellido: 'Serna', edad: 19},
    { nombre: 'María', apellido: 'Jiménez', edad: 16},
    { nombre: 'Ana', apellido: 'Suárez', edad: 21},
];

// queremos dejar solo a las que sean mayores de edad

// primero busco a las menores de edad
let posicionMenores = [];
for(let i=0; i<personas.length; i++){
    const persona = personas[i];
    if(persona.edad<18){
        posicionMenores.push(i);
    }
}
console.log(posicionMenores);

// ahora que tengo las posiciones, voy a ir eliminado lo que haya en esas posiciones
for(let i = posicionMenores.length-1; i>=0; i--){
    const posicion = posicionMenores[i]; // calcular la nueva posición del menor
    console.log('tendría que eliminar lo que haya en personas la posición '+posicion);
    personas.splice(posicion,1);
}

console.log('Me han quedado estas personas');
console.log(personas);