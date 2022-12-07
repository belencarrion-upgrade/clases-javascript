function findLargest(array){
    let masAlto = array[0];

    for(let numero of array){
        console.log('miro si '+numero +' es el número más alto');
        console.log('para eso lo comparo con '+masAlto+' que de momento es el número más alto que he encontrado');
        if(numero > masAlto){
            console.log(numero+' es más alto que '+masAlto);
            masAlto = numero;
        }
        console.log('de momento el más alto es '+masAlto);
    }

    return masAlto;
}

const numeros = [1, 6, 2, 8, 9, 11, 12, 6, 0, 20, 1, 7, 19, 3];
console.log('el número más alto es '+findLargest(numeros));
