// console.log('hola esto se muestra en la consola');
// // alert("Hola esto es una alerta");

// var respuesta = confirm("¿Quieres que te salude por tu nombre");
// if(respuesta==true){
//     var nombre = prompt("Introduce tu nombre:");
//     alert('Hola '+nombre);
// }
// else {
//     alert("Hola desconocido");
// }

// seleccionar un elemento por su id -> 1 elemento
const principal = document.getElementById('principal');
console.log(principal);

// seleccionar elementos por su clase -> array
const botones = document.getElementsByClassName('btn');
console.log(botones);

// seleccionar por nombre de etiqueta -> array
const titulos = document.getElementsByTagName("h1");
console.log(titulos);

// seleccionar elementos por el atributo name -> array
const inputNombre = document.getElementsByName("nombre");
console.log(inputNombre);

// querySelector -> utiliza una query como las de css
const botonSecundario = document.querySelector('.btn-secondary');
console.log(botonSecundario);

// querySelector devuelve UN resultado
// querySelectorAll devuelve un array con todos los resultados

const inputsTexto = document.querySelectorAll('input[type="text"]');
console.log(inputsTexto);

// parrafos en main
const parrafosMain = principal.getElementsByTagName('p');
console.log(parrafosMain);

// sacar un atributo de un elemento
const idInputNombre = inputNombre[0].getAttribute("id");
console.log(idInputNombre);

// crear un elemento nuevo
const newDiv = document.createElement("div");
principal.append(newDiv); // al principal le añado mi nuevo div

// crear un texto
const texto = document.createTextNode("Este texto se ha creado desde JS");
// añadirle un elemento a otro
newDiv.append(texto);

// añadirle un atributo
const img = document.querySelector('img');
const att = document.createAttribute("src");
att.value = "https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg";
img.setAttributeNode(att);

// if(confirm("¿Prefieres que lo muestre en rojo?")){
    for(let titulo of titulos){
        titulo.classList.add('text-red');
        titulo.classList.remove('miClase');
    }
// }

// eliminar un elemento
const form = document.querySelector('form');
form.remove();

// eliminar un hijo del elemento
principal.removeChild(botones[1]);

// añadir un elemento antes de otro
const subtitulo = document.createElement('h4');
subtitulo.innerText = "Este es un subtítulo";
subtitulo.style.color = "purple";
principal.insertBefore(subtitulo, parrafosMain[0]);

// crear una lista con 12 elementos
const lista = document.createElement("ul");
// creo un elemento
const listItem = document.createElement("li");
// defino qué texto va a llevar
listItem.innerText = "Elemento creado desde JS";
// lo añado a la lista
lista.append(listItem);
// lo repito 12 veces
for(let i=1; i<=12; i++){
    const listItem = document.createElement("li");
    listItem.innerText = "Elemento "+i;
    lista.append(listItem);
}
principal.append(lista);

let nombre = prompt("Introduce tu nombre");
console.log(nombre);
const spanNombre = document.querySelector('#nombreSaludo');
console.log(spanNombre);
spanNombre.innerText = nombre;
