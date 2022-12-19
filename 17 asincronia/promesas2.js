function consultarListaUsuarios(){
    // fingimos que esta función devuelve una lista de usuarios
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            resolve(['user01', 'usuario22', 'userPepito', 'user84776']);
        }, 1000);
    });
}

function consultarListaPeliculas(){
    // fingimos que esta función devuelve una lista de peliculas
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            // reject("Servidor se ha caído");
            resolve(['Avatar', 'La vida es bella', 'El rey león']);
        }, 2000);
    });
}

function consultarListaGeneros(){
    // fingir que esta función devuelve una lista de géneros de cine
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(['Terror', 'Acción', 'Comedia']);
        }, 500);
    });
}

consultarListaUsuarios()
    .then(listaUsuarios => {
        console.log('se ha recuperado la lista de usuarios');
        console.log(listaUsuarios);
    })
    .catch(respuesta => {console.log('ERROR', respuesta)});


consultarListaPeliculas()
    .then(listaPeliculas => {
        console.log('se ha recuperado la lista de películas');
        console.log(listaPeliculas);
    })
    .catch(respuesta => {console.log('ERROR', respuesta)});


consultarListaGeneros()
    .then(listaGeneros => {
        console.log('se ha recuperado la lista de géneros');
        console.log(listaGeneros);
    })
    .catch(respuesta => {console.log('ERROR', respuesta)});

// espera a que se cumplan TODAS
Promise.all([consultarListaUsuarios(), consultarListaPeliculas(), consultarListaGeneros()])
    .then((respuesta)=>{
        console.log('Se han cumplido las tres promesas');
        console.log(respuesta);
    })
    .catch((respuesta)=>{
        console.log('No se han podido cumplir las promesas');
        console.log(respuesta);
    })

// espera a que se cumpla CUALQUIERA
Promise.race([consultarListaUsuarios(), consultarListaPeliculas(), consultarListaGeneros()])
.then((respuesta)=>{
    console.log('Se ha cumplido alguna de las promesas promesas');
    console.log(respuesta);
})
.catch((respuesta)=>{
    console.log('No se han podido cumplir las promesas');
    console.log(respuesta);
})