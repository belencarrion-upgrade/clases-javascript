var spiderman = {
    nombre: "Peter",
    apellidos: "Parker", 
    pais: "USA",
    profesion: "Student"
}

// key: nombre. valor: Peter
console.log(spiderman['nombre']); // Peter

for (let clave in spiderman) {
    console.log(clave, spiderman[clave]);
    // console.log("Spiderman tiene " + key + " con valor: " + spiderman[key]);
}

// in vs of

let numeros = [8, 12, 44];
// let... in saca las claves
for(let i in numeros){
    console.log(i);
}

// let...of saca los valores
for(let of in numeros){
    console.log(i);
}