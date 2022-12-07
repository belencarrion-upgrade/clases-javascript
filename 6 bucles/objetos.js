const listaCompra = [
    { articulo: 'manzanas', cantidad: 3, comprado: true},
    { articulo: 'yogures', cantidad: 6, comprado: false},
    { articulo: 'leche', cantidad: 1, comprado: false}
];

console.log('Tengo que comprar:');
for(let elemento of listaCompra){
    if(elemento.comprado==false){
        console.log("- "+elemento.articulo + " (" + elemento.cantidad+")");
    }
}