/*
Ejercicio 1:

Calcula cuantas horas le llevaria llegar a la Luna a una nave espacial y
guarda el resultado en una variable.

La distancia desde la tierra hasta la luna es de 384.400 kilometros.

La velocidad de la nave es de 1225 kilometros por hora.

*/
let kilometros = 384400;
let velocidad = 1225;
let horasTrancurridas = kilometros / velocidad;

console.log("La nave tardara " + Math.round(horasTrancurridas) + " en llegar a la luna");