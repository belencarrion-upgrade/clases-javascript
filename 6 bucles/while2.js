let numero = 25; // numero que voy a comprobar si es primo

let esPrimo = true; // el numero es primo o no
let i = 2; // 

while(esPrimo && i<23){
    console.log('pruebo a dividir '+numero+' entre '+i);
    if(numero%i==0){
        console.log(numero+' no es primo porque se puede dividir entre '+i);
        esPrimo = false;
    }
    i++;
}

console.log(numero + ' es primo? '+esPrimo);