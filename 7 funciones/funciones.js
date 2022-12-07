let frutas = ['manzana', 'pera', 'kiwi', 'Naranja', 'PLÁTANO'];

function tieneNA(palabra){
    return palabra.toLowerCase().includes('n') && palabra.toLowerCase().includes('a');
}

for(let fruta of frutas){
    if(tieneNA(fruta)){
        console.log(fruta);
    }
}