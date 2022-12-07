let numeros = [ 3, 5, 19, 27, 32, 48, 31, 79, 20, 12, 45, 63, 45, 51, 1, 2, 8, 11, 92];

// vamos a calcular si tengo algún número
let parEncontrado = false; // antes de mirar el array no he encontrado ningún par
for(let num of numeros){
    console.log('miro si el número '+num+' es par');
    if(num%2==0){
        parEncontrado = true;
    }
}
console.log('tengo algún número par en mi array?', parEncontrado);

parEncontrado = false;
let i = 0;
while(!parEncontrado && i<numeros.length){
    let num = numeros[i];
    console.log('miro si el número '+num+' es par');
    if(num%2==0){
        parEncontrado = true;
    }
    i++;
}
console.log('tengo algún número par en mi array?', parEncontrado);