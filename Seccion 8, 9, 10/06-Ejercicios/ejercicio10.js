/*
Ejercicio 10:

El otro dia fui con mi amigo Pepe y Manolo a un restaurante de smash burgers.

Yo me comi 2, pepe se comio 3 y Manolo, como es culturista, se comio 6.

¿Cuantas hamburguesas nos comimos en total?

Y... ¿Es cierto que yo comi menos que pepe?

Responde a estas dos preeguntas devolviendo el resultado en la consola del navegador.

*/

let yeyson = 2;
let pepe = 3;
let manolo = 6;
const totalComida = yeyson + pepe + manolo;
const comprobacion = yeyson < pepe;

console.log("En total nos comimos " + totalComida + " hamburguesas");
console.log("Y... ¿Es cierto que yo comi menos que pepe? " + comprobacion + "Por que comi " + yeyson + " hamburguesas");