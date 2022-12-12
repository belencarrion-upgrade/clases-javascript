// cuando nosotros escribimos esto
function sumar(num1, num2){
    console.log('num1 vale'+num1);
    console.log('num2 vale '+num2);
    const resultado = num1+num2;
    console.log('la suma es '+resultado);
    return resultado;
}

// para javascript es como si hubiesemos definido las variables al principio de la función
function sumar(num1, num2){
    let resultado;
    console.log('num1 vale'+num1);
    console.log('num2 vale '+num2);
    resultado = num1+num2;
    console.log('la suma es '+resultado);
    return resultado;
}

const nombre = "Belén";
function saludar(){
    console.log('Hola '+nombre); // va a fallar
    nombre = "María";
    console.log('Hola '+nombre);
}
console.log('Hola '+nombre);
saludar();