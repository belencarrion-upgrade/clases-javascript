"use strict";

const NUM_EJERCICIOS = 17;
let ejerciciosEntregados = 14;
let nota = 7.5;

// const porcentajeEntregados = (ejerciciosEntregados / NUM_EJERCICIOS) * 100;
// console.log('porcentaje de ejercicios entregados', porcentajeEntregados);

// const aprobado = nota>=5 && porcentajeEntregados>=80;
// console.log('¿estará aprobado?', aprobado);

const notaSuficiente = nota>=5;
console.log('ha sacado al menos 5?', nota5);

const porcentajeEntregados = (ejerciciosEntregados / NUM_EJERCICIOS) * 100;
console.log('porcentaje de ejercicios entregados', porcentajeEntregados);

const porcentajeSuficiente = porcentajeEntregados >= 80;
console.log('ha entregado minimo el 80?', porcentajeSuficiente);

const aprobado = notaSuficiente && porcentajeSuficiente;
console.log('¿está aprobado?', aprobado);

console.log('¿está aprobado?', nota>=5 && (ejerciciosEntregados/NUM_EJERCICIOS)*100>=80);