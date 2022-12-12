setInterval(saludar, 3000); // cada 3 segundos ejecuta la función saludar

let contador = 0;
function saludar(){
    contador++;
    console.log('hola', contador);
}