const mensaje = document.querySelector('#alertaMensaje');

const mostrarMensaje = () => {
    const nombre = document.querySelector('#nombre').value;
    const comentario = document.querySelector('#comentario').value;
    if(nombre!='' && comentario!=''){ // solo si no están vacíos
        mensaje.style.display = 'block'; // mostrar
        setTimeout(ocultarMensaje, 1000); // cuando pase 1 segundo, llamará a ocultar mensaje
    }
}

const ocultarMensaje = () => {
    mensaje.style.display = 'none'; // ocultar
}

const boton = document.querySelector('#btnEnviar');
boton.addEventListener('click', mostrarMensaje);