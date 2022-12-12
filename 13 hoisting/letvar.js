// con var -> se sobrescribe la variable global
console.log('CON VAR');
var nombre = 'SpiderMan'

if(nombre) {
	var nombre = 'Thor';
	console.log('Dentro del if: ' + nombre);
}
console.log('Fuera del if: ' + nombre);

// con let -> se crea una variable local dentro del if
console.log('CON LET');
let myAvenger = 'SpiderMan'

if(myAvenger) {
	let myAvenger = 'Thor';
	console.log('Dentro del if: ' + myAvenger);
}
console.log('Fuera del if: ' + myAvenger);

