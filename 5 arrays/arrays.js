let frutas = ["manzana", "pera", "plátano", "naranja"];

const miFruta = frutas.pop(); // saca el último elemento
console.log(frutas);
console.log(miFruta);

frutas.push('kiwi'); // añadir un elemento AL FINAL
console.log(frutas);

frutas.reverse(); // darle la vuelta al array
console.log(frutas);

frutas.shift(); // saca el primer elemento del array
console.log(frutas);

frutas.sort(); // me ordena el array en orden alfabetico
console.log(frutas);

frutas = ["manzana", "pera", "plátano", "naranja", "fresa", "kiwi"];

/*
    splice me termine eliminar o añadir elementos a partir de una posicion
    recibe
        - a partir de qué posición vamos a modificar. en nuestro ejemplo: 2
        - cuántos elementos vamos a eliminar
        - qué elementos voy a añadir
*/
frutas.splice(2,3);
console.log(frutas); // [ 'manzana', 'pera', 'kiwi' ]

frutas.splice(1,1,"mandarina", "sandía"); // [ 'manzana', 'mandarina', 'sandía', 'kiwi' ]
console.log(frutas);

let posicion = frutas.indexOf("pera"); // buscar posición dentro del array
console.log('pera está en la posición '+posicion);
frutas.splice(posicion,1);
console.log(frutas);

// [ 'manzana', 'mandarina', 'sandía' ]

frutas.unshift('limón'); // añado al principio del array
console.log(frutas);

let frutas2 = ['melón', 'maracuyá', 'mango'];
let frutas3 = frutas.concat(frutas2); // concatenar arrays

console.log(frutas3);
console.log('frutas 3 tiene '+frutas3.length+' elementos');

let misFrutas = frutas.join(' -> '); // crea un string con los elementos separados por lo que le especifiquemos
console.log(misFrutas);
console.log(typeof misFrutas);

let frutasFavoritas = frutas.slice(1,3); // seleccionar elementos entre 2 posiciones
console.log('frutas', frutas);
console.log('frutasFavoritas', frutasFavoritas);

misFrutas = frutas.toString(); // me convierte mi array en un string
console.log(misFrutas);
console.log(typeof misFrutas);

frutas = ['pera', 'manzana', 'plátano', 'fresa', 'manzana'];
// indexOf -> primera posición de un elemento
// lastIndexOf -> última posición de un elemento
// includes -> true/false si está o no el elemento
console.log(frutas.indexOf('manzana'));
console.log(frutas.lastIndexOf('manzana'));
console.log(frutas.includes('manzana'));