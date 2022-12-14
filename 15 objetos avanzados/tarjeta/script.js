const persona = {}; // aquí guardaremos los datos del formulario

// seleccionamos todos los inputs
const inputs = document.querySelectorAll('.form-control');
// cuando se modifique un input, llamamos a modificarObjeto
for(let input of inputs){
    input.addEventListener('change', modificarObjeto);
}

/*
* modificarObjeto modificará los datos del objeto persona
*/
function modificarObjeto(event){
    console.log(event.target);
    const dato = event.target.id;
    console.log('el dato que he cambiado es '+dato);
    const valor = event.target.value;
    console.log('el valor nuevo es '+valor);
    persona[dato]=valor;
    console.log(persona);
    rellenarTarjeta();
}

// con object destructuring(es6)
// function modificarObjeto(event){
//     const {id, value} = event.target;
//     persona[id]=value;
//     rellenarTarjeta();
// }

/**
 * rellena la tarjeta con los datos del objeto
 */
function rellenarTarjeta(){
    for(let propiedad in persona){
        console.log(propiedad);
        const valor = persona[propiedad];
        if(propiedad=='imagen'){
            // si por ejemplo la propiedad es nombre -> seleccionamos los .nombre
            document.querySelector('.'+propiedad).src = valor;
        }
        else{
            document.querySelector('.'+propiedad).innerText = valor;
        }
    }
}