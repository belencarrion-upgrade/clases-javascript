const persona = {
    nombre: 'Pedro',
    edad: 34,
    examen1: 10,
    examen2: 9,
    examen3: 9.5,
    examen4: 10,

    saludar: () => {
        console.log('hola!')
    },

    presentarse: () => {
        console.log('me llamo '+this.nombre)
    }
}

console.log(persona);

console.log(persona.nombre);
console.log(persona['nombre']);

const dato = 'nombre';
console.log(persona[dato]);
console.log(persona.dato);

const examen = 'examen';
console.log(persona[examen+'1']);
for(let i=1; i<=4; i++){
    console.log(persona[examen+i]);
}

// function crearPersona(nombre, edad){
//     // const personaNueva = {
//     //     nombre: nombre,
//     //     edad: edad
//     // };
//     // return personaNueva;
//     return {
//         nombre,
//         edad
//     }
// }
const crearPersona = (nombre, edad) => {
    return {
        nombre, 
        edad,
        presentarse: function(){
            console.log('me llamo '+this.nombre)
        }
    }
};

const persona2 = crearPersona('Julio', 28);
const persona3 = crearPersona('Mónica', 31);
console.log(persona2);
console.log(persona3);

console.log('edad' in persona2);
console.log('age' in persona2);

for(let dato in persona){
    console.log(dato);
}

for(let dato in persona2){
    console.log(dato);
}

persona.saludar();
persona.presentarse();
persona2.presentarse();
persona3.presentarse();