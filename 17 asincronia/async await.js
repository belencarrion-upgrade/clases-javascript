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

// async await

const frutas = ['kiwi', 'fresa', 'plátano', 'manzana'];
async function procesarFrutas(){
    let arrayActualizado = await anadirElemento(frutas, 'pera');
    arrayActualizado = await anadirElemento(arrayActualizado, 'sandía');
    arrayActualizado = await anadirElemento(arrayActualizado, 'melón');
    console.log(arrayActualizado);
}

setTimeout(()=>{
    console.log('algo que tengo que hacer entre medias');
}, 1500);

// const procesarFrutas = async () => {};

procesarFrutas();