let saludo = "Hola"; // variable global. existe en todo el código

function miFuncion(){
    /* variable local
    las variables que creo dentro de una función, 
    solo existen dentro de esa función */
    let nombre = "Belen";
    console.log(saludo + ' '+nombre);
}
// console.log('Hola '+nombre); // aquí nombre no existe

miFuncion();

for(let i=0; i<5; i++){
    console.log(i); // i es una variable local y solo existe en el bucle
}
console.log(i); // aquí i no existe