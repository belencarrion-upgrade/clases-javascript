function saludar(nombre){
    const saludo = "Hola";

    return function(){
        // tiene acceso a todas las variables de saludar
        console.log(saludo+', '+nombre);
    };
}

const saludarBelen = saludar("Belén");

saludarBelen();