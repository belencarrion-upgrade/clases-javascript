// // lo que habíamos visto hasta ahora
// function saludar(nombre){
//     console.log('hola, '+nombre);
// }

// const saludar = function(nombre) {
//     console.log('hola, '+nombre);
// }

// // arrow functions
const saludar = (nombre) => {
    console.log('hola, '+nombre);
}

const sumar = (num1, num2) => {
    return num1+num2;
}

// si solo recibe un número, no necesita paréntesis
const doblar = num => {
    const resultado = num*2;
    return resultado;
}

// si LO ÚNICO que hace es devolver una cosa, no necesita llaves ni el return
const triplicar = num => num*3;

console.log(sumar(1,2));
console.log(doblar(3));
console.log(triplicar(4));
saludar('Belen');

let array = ['kiwi', 'naranja', 'manzana', 'fresa'];
// recorrer array con for...of
for(let fruta of array){
    console.log(fruta);
}
// recorrer array con forEach
array.forEach(fruta=>{
    console.log(fruta);
})