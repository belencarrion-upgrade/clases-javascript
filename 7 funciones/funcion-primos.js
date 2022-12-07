function esPrimo(num){
    for(let i=2; i<num; i++){
        if(num%i==0){
            return false; // si se puede dividir entre otro número, ya sé que NO es primo
        }
    }
    return true;
}

// buscar números primos entre el 1 y el 30
for(let i=1; i<=30; i++){
    // si solo hay una instrucción en el if, puedo ponerlo sin llaves
    if(esPrimo(i)) console.log(i);
    // else console.log(i+ 'no es primo');
}