'use strict';

const persona = {
    nombre: 'Pepe',
    edad: 30,
    examen1: 10,
    examen2: 9,
    examen3: 0.5,
    examen4:10
}

console.log(persona);

console.log(persona.nombre); // Pepe
console.log(persona['nombre']); // Pepe

const dato = 'nombre';
console.log(persona[dato]); // saca el nombre de persona -> Pepe
console.log(persona.dato); // no se puede

const examen = 'examen';
console.log(persona[examen+'1']); // saca el examen1 -> 10
for(let i=1; i<=4; i++){
    console.log(persona[examen+i]);
    // console.log(persona.examen+i); // no se puede
}

function anadirDato(clave, valor){
    persona[clave] = valor;
}


persona.apodo = '';
persona['tiene mascotas']=true;
// persona.'tiene mascotas' // no se puede
// console.log('persona', persona);
console.log('persona:');
console.log(persona);

anadirDato('colorFavorito','rojo');
console.log(persona);

function crearPersona(nombre, edad){
    // const personaNueva = {
    //     nombre: nombre,
    //     edad: edad
    // }
    // return personaNueva;
    const miVar = {
        nombre, 
        edad,
         // hasta aquí es lo mismo que el código anterior que está comentado
        saludar: function(){
            console.log('hola');
        },
        presentarse: function(){
            console.log('Hola, me llamo '+ this.nombre + ' y tengo ' + this.edad + ' años');
        },
        cumplirAnos: function(){
            this.edad++; // suma un año a la edad
        },
        // CUIDADO. las arrow functions no pueden usar el this
        // presentarse: ()=>{
        //     console.log('Hola, me llamo '+ this.nombre + ' y tengo ' + this.edad + ' años');
        // } 
    };
    return miVar;
}

const persona2 = crearPersona('Juana', 28);
const persona3 = crearPersona('Emilio', 35);
console.log(persona2);
console.log(persona3);
console.log(persona3);

persona3.saludar();
persona2.presentarse();
persona3.presentarse();
persona3.cumplirAnos();
persona3.presentarse();

// vamos a hacer lo mismo con arrow functions

const suma = (num1, num2) => num1+num2;
const resta = (num1, num2) => {
    const resultado =num1-num2;
    return resultado;
}
const crearPersona2 = (nombre, edad) => ({nombre, edad}); // nos crea un objeto con el nombre y edad que le pasemos. igual que crearPersona
console.log(suma(1,2)); //3

const persona4 = crearPersona2('Luisa', 41); // esta vez con arrow function
console.log(persona4);

// in nos sirve para ver si un objeto tiene una propiedad en concreto
console.log('edad' in persona4); // true
console.log('colorFavorito' in persona4); // false

for(let dato in persona4){
    console.log(dato + ' -> ' + persona4[dato]);
}