function anadirElemento(array, elemento){
    const miPromesa = new Promise((resolve, reject)=>{
        if(!array){ // si no recibe un array (si es null o undefined)
            reject("El array no es válido");
        }
        else {
            console.log(`añadiendo ${elemento}...`);
            setTimeout(()=>{
                array.push(elemento);
                resolve(array);
            }, 1000);
        }
    });
    return miPromesa;
}


const frutas = ['kiwi', 'fresa', 'plátano', 'manzana'];
anadirElemento(frutas, 'naranja')
    .then( arrayActualizado => anadirElemento(arrayActualizado, 'pera'))
    .then( arrayActualizado => anadirElemento(arrayActualizado, 'sandía'))
    .then( arrayActualizado => anadirElemento(arrayActualizado, 'melón'))
    .then( arrayActualizado =>{ console.log(arrayActualizado)})
    .catch(respuesta=>{ 
        console.log('Algo ha fallado');
        console.log(respuesta); // El array no es válido
    });
