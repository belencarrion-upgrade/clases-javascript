// ÁMBITO GLOBAL: se pueden utilizar en todo el programa
// ÁMBITO LOCAL: se pueden utilizar solo donde se han creado

const pi = 3.1416; // pi tiene ámbito global
console.log(pi);

function miFunction(){
    console.log('pi dentro de la función', pi);
    const radio = 3; // ámbito local. solo se puede usar en miFunction
    const diametro = radio * pi; // ámbito local. solo se puede usar en miFunction
    console.log('el diámetro es '+diametro); // function
}

miFunction();
// console.log('el diámetro es '+diametro); // falla

for(let i=0;i<=5; i++){
    console.log(i); // i tiene ámbito local y solo se puede usar dentro del for
}
console.log(i); // falla