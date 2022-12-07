function sum(numberOne , numberTwo) {
    let masAlto;
    if(numberOne>=numberTwo){
        masAlto = numberOne;
    }
    else {
        masAlto = numberTwo;
    }
    return masAlto;
}

console.log(sum(3,3));
console.log(sum(3,5));
console.log(sum(5,3));