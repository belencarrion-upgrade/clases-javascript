const persona = {
    nombre: 'Pedro',
    edad: 34
}

console.log('Hola me llamo '+ persona.nombre +' y tengo ' + persona.edad +' años');
console.log(`Hola me llamo ${persona.nombre} y tengo ${persona.edad} años`);

// const nombre = persona.nombre;
// const edad = persona.edad;
const {nombre, edad} = persona;
console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);

const persona2 = persona;
console.log(persona);
console.log(persona2);

persona2.nombre = 'Miranda';
console.log(persona);
console.log(persona2);

const persona3 = {...persona, colorFavorito: 'rojo'};
persona3.nombre = 'Juan';
console.log(persona);
console.log(persona3);

const arr = [1,2,3];
const arr2 = [4,5,6];
const nuevoArr = [...arr, 8,...arr2];
console.log(nuevoArr);

const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
];

const filtrados = toys.filter(toy=>toy.name.includes('gato')==false);
// const filtrados = toys.filter(toy=>!toy.includes('gato'));

console.log('filter');
console.log(filtrados);

const barbie = toys.find(toy=>toy.name.includes('Barbie'));
console.log('find');
console.log(barbie);

// MAP
console.log('map');
const toys2 = toys.map(toy=>({...toy, isTopSeller: toy.sellCount>15}));
console.log(toys2);

// REDUCE
console.log('reduce');
const ventasTotales = toys.reduce((acumulador, toy) => acumulador + toy.sellCount, 0);
// const acumulador = 0;
// for(let toy of toys ){
//     acumulador = acumulador + toy.sellCount;
// }
// ventasTotales = acumulador;
console.log(ventasTotales);