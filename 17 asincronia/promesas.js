function anadirElemento(array, elemento){
    console.log(`añadir ${elemento} al array`, array);
    const miPromesa = new Promise((resolve, reject)=>{
        // resolve = la promesa se cumple
        // reject = la promesa no se cumple
        if(!array){ // si no recibe un array (si es null o undefined)
            reject("El array no es válido");
        }
        else {
            array.push(elemento);
            console.log(array);
            resolve(array);
        }
    });
    return miPromesa;
}


const frutas = ['kiwi', 'fresa', 'plátano', 'manzana'];
let citricos;
anadirElemento(frutas, 'naranja')
    .then((arrayActualizado)=>{ // then si la promesa se ha cumplido. i.e. si se ha llamado a resolve
        console.log('Se ha añadido el elemento');
        console.log('recibo el array:', arrayActualizado);
    })
    .catch((respuesta)=>{ // si la promesa no se ha cumplido. i.e. si se ha llamado a reject
        console.log('Algo ha fallado');
        console.log(respuesta); // El array no es válido
    });

// const respuesta = anadirElemento(frutas, 'pera');
// console.log(respuesta);
