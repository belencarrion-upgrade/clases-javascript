export function CrearPersona(nombre, edad){
    return {
        nombre: nombre,
        edad: edad,
        presentarse: function(){
            console.log(`Hola, me llamo ${this.nombre} y tengo ${edad} años`);
        },
        esMayorDeEdad: function(){
            return this.edad>=18;
        }
    }
}