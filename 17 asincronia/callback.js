console.log('Empieza el script');

function mostrarArray(array){
    console.log('mostrar array');
    console.log(array);
}

function anadirElemento(array, elemento, funcionFinalizado){
    setTimeout(()=>{
        console.log('añadir elemento '+elemento);
        array.push(elemento);
        funcionFinalizado(array);
    }, 1000); // vamos a fingir que es una llamada que tarda más tiempo usando un timeout
}

console.log('hola');

setTimeout(()=>{
    console.log('algo que pasa entre medias');
}, 500);

const frutas = ['kiwi', 'fresa', 'plátano', 'manzana'];
// llamamos a añadir elementos y le pasamos la función mostrarArray para cuando termine de añadir
anadirElemento(frutas, 'naranja', mostrarArray);

// callback helll
anadirElemento(frutas, 'naranja', (arrayActualizado)=>{
    anadirElemento(arrayActualizado, 'sandía', (arrayActualizado)=>{
        anadirElemento(arrayActualizado, 'melón', mostrarArray)
    })
});
