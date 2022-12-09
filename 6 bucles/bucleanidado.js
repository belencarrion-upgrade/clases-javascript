'use strict';

for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        console.log('i: '+i+' j: '+j);
    }
}

let array = [1,2,6,2,5,8,3,4,2,1,4,6,9];
// for(let i=array.length; i>=0; i--){
//     let num = array[i];
//     console.log('buscando múltiplos de '+num);
//     let tieneMultiplos = false;
//     for(let num2 of array){
//         if(num!=num2 && num2%num==0){
//             // console.log(num2);
//             tieneMultiplos = true;
//         }
//     }
//     if(tieneMultiplos == false){
//         console.log('eliminar '+num);
//         array.splice(i,1);
//     }
// }
// console.log('al final me quedan');
// console.log(array);

for(let i=0; i<array.length; i++){
    const num = array[i];
    console.log('mirando si '+num+' está repetido');
    let repetido = false;
    for(let j=0; j<array.length; j++){
        const num2=array[j];
        if(num==num2 && i!==j){
            repetido = true;
        }
    }
    console.log(repetido);
}