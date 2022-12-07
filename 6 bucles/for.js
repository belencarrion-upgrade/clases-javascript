// uso for cuando sé cuántas veces voy a querer repetir algo
// para eso creo una variable con un valor inicial: e.g. i = 0
// defino hasta cuándo quiero repetir el bucle. e.g. mientras i<10
// defino cómo cambia i en cada iteración. e.g. i++
let frutas = ['mandarina', 'manzana', 'pera', 'fresa', 'kiwi', 'mango', 'plátano'];
for(let i=0;i<frutas.length;i++){
    let fruta = frutas[i];
    console.log('en la posicion '+i+ ' tengo la fruta '+fruta);
}

// ejemplo de bucle "hacia atrás": disminuyendo i en vez de aumentando
console.log('Iniciando cuenta atrás...')
for(let i=10;i>0;i--){
    // lo que queramos que se repita
    console.log(i);
}
