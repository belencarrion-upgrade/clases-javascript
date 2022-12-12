function cambiarColor(event){
    event.target.classList.toggle('btn-primary');
    event.target.classList.toggle('btn-success');
}

// con forEach
document.querySelectorAll('button').forEach(boton=>{
    boton.addEventListener('click', cambiarColor);
});

// con for...of
let botones = document.querySelectorAll('button');
for(let boton of botones){
    boton.addEventListener('click', cambiarColor);
}

