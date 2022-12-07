"use strict";
let mes = 2;
let anno = 2021;

switch(mes){
    case 2:
        var divisible4 = anno%4==0;
        var divisible100 = anno%100==0;
        var divisible400 = anno%400==0;
        var esBisiesto = divisible400 || (divisible4 && !divisible100);
        if(esBisiesto){
            console.log('29 días');
        }
        else {
            console.log('28 días');
        }
        break;
    case 3:
    case 5:
    case 9:
    case 11:
        console.log('30 días');
        break;
    default:
        console.log('31 días');
}