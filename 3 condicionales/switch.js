let diaSemana = 3;

/*
todo lo que se puede hacer con un switch 
se puede hacer con un if
PERO no todo lo que se puede hacer con un if
se puede hacer con un switch
*/

switch(diaSemana){
    case 1:
        console.log('lunes');
        break;
    case 2:
        console.log('martes');
        break;
    case 3: 
        console.log('miercoles');
        break;
    case 4: 
        console.log('jueves');
        break;
    case 5: 
        console.log('viernes');
        break;
    case 6: 
    case 7: 
        console.log('fin de semana');
        break;
    default: // en el resto de casos
        console.log('El valor no es válido');
}