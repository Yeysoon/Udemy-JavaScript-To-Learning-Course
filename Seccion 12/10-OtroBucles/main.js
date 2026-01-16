/*
    Bucle while
    
    while (condicion) {
        codigo que se ejecutara mientras se cumpla la condicion
    }
    Ejemplo:


let year = 1990;
let objetivo = 2177;

while (year != 2177) {
    console.log("Estamos en el año: " + year);


    if (year == 2117) {
        break;
    }
    year++;
}
*/
/*
    Bucle do while
    Estructura
    do {
        siempre se ejecutara al menos una vez la condicion, es decir primero ejecutas el codigo y luego compruebas si quieres seguir utilizando.
    } while (condicion);
    Ejemplo 2:
*/

let numeros = 47;
do {
    console.log(numeros);
    numeros--
} while (numeros > 0);