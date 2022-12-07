let a = true;
let b = false;
 
let c = a & b; // devuelve true si TODO es true -> false
c = a | b; // devuelve true si AL MENOS UNO es true -> true
c = a ^ b; // devuelve true SOLO SI UNO es true -> true

true | true; // true
true ^ true; // false

c = a && b; // devuelve true si TODO es true -> false

false && true; // con && dejo de mirar cuando encuentro false porque se que va a ser false
false & true; // va a evaluar la expresion entera

true || false; // con || dejo de mirar cuando encuentro true porque se que va a ser true
true | false; // mira la expresión entera
