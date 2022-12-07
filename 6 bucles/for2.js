let frutas = ['mandarina', 'manzana', 'kiwi', 'pera', 'fresa', 'kiwi', 'mango', 'plátano'];
let contador = 0;
for(let fruta of frutas){
// for(let i=0; i<frutas.length; i++){
//     let fruta = frutas[i];
    console.log('mirando si '+fruta+' tiene una a');
    if(fruta.includes('a') && fruta.includes('e')){
        contador++;
        console.log('tiene las 2');
    }
    else {
        console.log('no tiene :(')
    }
    console.log('ahora contador vale '+contador);
}
console.log(contador+' frutas tienen las letras a y e');