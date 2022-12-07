let alumno1 = {
    nombre: "Rocio Carrasco",
    email: "r.c@uh.com",
    fechaNacimiento: "",
    nota: 10,
}

let alumno2 = {
    nombre: "Jane Doe",
    email: "j.d@uh.com",
    fechaNacimiento: "01/01/1991",
    nota: 9
}
alumno2.nota = 9.5; // modifico la nota 
alumno2['nota'] = 9.5; // es lo mismo
console.log(alumno2.nombre + " ahora tiene " + alumno2.nota);

const alumno3 = alumno2;
// javascript no me crea una copia del objeto
/* 
lo que hace es que la variable alumno3 apunte a la direccion de memoria
donde guardó los datos del alumno2
*/
alumno3.nombre = "Pepito perez";
console.log('alumno2', alumno2);
console.log('alumno3', alumno3);

alumno3.otraCosa = alumno3['nota'] * 2;
console.log('alumno3', alumno3);

alumno3="un string";