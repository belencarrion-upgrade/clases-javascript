function anadirElemento(array, elemento){
    array.push(elemento);
    return array;
}

const frutas = ['kiwi', 'fresa', 'plátano', 'manzana'];
let citricos;

console.log('empieza el programa...');
try {
    // es lo que vamos a intentar ejecutar
    const arrayActualizado = anadirElemento(citricos, "naranja");
    console.log('todo ha ido bien');
    console.log(arrayActualizado);
}
catch(error) {
    // es lo que vamos a hacer si ha fallado lo anterior
    console.log('No se ha podido añadir el elemento');
    // console.log(error);
}
console.log('seguiría el programa....');
console.log('termina el programa. FIN');