const personas  = [
    { nombre: 'Fulanito', apellido: 'Pérez', edad: 17},
    { nombre: 'Juan', apellido: 'López', edad: 18},
    { nombre: 'Pepe', apellido: 'Serna', edad: 19},
    { nombre: 'María', apellido: 'Jiménez', edad: 16},
    { nombre: 'Ana', apellido: 'Suárez', edad: 21},
];

let i=0;
while(i<personas.length){
    const persona = personas[i];
    if(persona.edad>=18){
        // solo aumento de posición si no elimino a la persona
        i++;
    }
    else{
        // si la persona es menor de edad, la eliminamos
        personas.splice(i,1);
        // no aumento i para mantenerme en la misma posición porque ahora habrá otra persona
    }
}
console.log('al final se me quedan estas personas');
console.log(personas);