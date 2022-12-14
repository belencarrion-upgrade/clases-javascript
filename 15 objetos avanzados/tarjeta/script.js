const datos = {};

document.querySelectorAll('.form-control').forEach(input=>{
    input.addEventListener('change', modificarDatos);
})

function modificarDatos (event) {
    const {id, value} = event.target;
    datos[id] = value;
    dibujarTarjeta();
}

function dibujarTarjeta() {
    for(dato in datos){
        if(dato!=''){
            if(dato!='imagen') {
                document.querySelector('#tarjeta .'+dato).innerText = datos[dato];
            }
            else {
                document.querySelector('#tarjeta .'+dato).src = datos[dato];
            }
        }
    }
}