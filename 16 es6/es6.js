'use strict';

// TEMPLATE STRINGS
const persona = {
    nombre: 'Pepe',
    edad: 30,
	presentarse: function(){
		// hasta ahora hacíamos
		// console.log('Hola, me llamo '+this.nombre+' y tengo '+this.edad+' años');
		// ahora podemos hacerlo de otra forma añadiendo variables dentro de un texto
		console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años y el año que viene cumplo ${this.edad +1}`);
	}
}
persona.presentarse();

// OBJECT DESTRUCTURING
// hasta ahora lo hacíamos así
// const nombre = persona.nombre;
// const edad = persona.edad;
// ahora podemos hacerlo de golpe con object descturing
const {nombre, edad} = persona;
console.log(nombre);
console.log(edad);

// SPREAD OPERATOR: ...
const persona1 = {
	nombre: 'Pilar',
	edad: 28
}
const persona2 = persona1; // si lo hacemos así, al modificar persona2 se modifica persona 1
console.log('persona1: ');
console.log(persona1);
console.log('persona2: ');
console.log(persona2);
persona2.nombre = 'Lorena';
console.log('después de modificar el nombre de persona2 -> persona1: ');
console.log(persona1);
console.log('después de modificar el nombre de persona2 -> persona2: ');
console.log(persona2);

const persona3 = { ...persona1}; // ...persona1 significa que se copia todo lo que haya en persona1
console.log('persona3');
console.log(persona3);
persona3.nombre = 'Pepita';
console.log('después de modificar el nombre de persona3 -> persona1: ');
console.log(persona1);
console.log('después de modificar el nombre de persona3 -> persona3: ');
console.log(persona3);

const persona4 = {...persona1, colorFavorito: 'verde'};
console.log('persona4:');
console.log(persona4);

const arr = [1,2,3];
const otroArr=[4,5,6]
const arr2 = [ ...arr , ...otroArr, 0];
// arr2 tendrá todo lo de arr, todo lo de otroArr y un 0
console.log(arr);
console.log(arr2);

// FILTER
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
const filtrados = toys.filter(
	toy => toy.name.includes('gato')==false
);
console.log('elementos filtrados con filter');
console.log(filtrados);

// FIND: parecido a filter pero devuelve un único elemento
const barbie = toys.find(
	toy => toy.name.includes('Barbie')==true
)
console.log('elemento encontrado con find');
console.log(barbie);

// MAP
// lo usamos si necesitamos transformar los elementos a otro
const popularToys = toys.map(
	toy => {
		return { ...toy, isBestSeller: toy.sellCount>15}
	}
);
console.log('después del map');
console.log(popularToys);

// REDUCE
let ventasTotales = toys.reduce(
	(contador, toy)=> contador + toy.sellCount,
	0
);
console.log('ventas totales calculadas con reduce y arrow function');
console.log(ventasTotales);

let contador = 0;
for(let toy of toys){
	contador = contador + toy.sellCount
}
console.log('ventas totales calculadas con for...of');
ventasTotales = contador;
console.log(ventasTotales);

console.log('ventas totales calculadas con reduce y una función normal');
ventasTotales = toys.reduce(
	function(contador, toy){
		// qué valor toma acumulador en cada vuelta del bucle
		return contador + toy.sellCount;
	},
	0
)
console.log(ventasTotales);

// FOREACH
toys.forEach(
	toy =>{
		console.log(toy.name);
	}
);