/*
Ejercicio 08:

Tengo una heladería y cada bola de helado vale 1.8 euros.

¿Cuanto cuestan los cucuruchos de 1, 2 y 3 bolas?

Ten en cuenta que el barquillo cuesta cincuenta centimos de euros.
*/

let precioBola = 1.8;
let barquillo = 0.5;

let barquilloUnaBola = precioBola + barquillo;
let barquilloDosBolas = precioBola * 2 + barquillo;
let barquilloTresBolas = precioBola * 3 + barquillo;

console.log("Barquillo de una bola: " + barquilloUnaBola + " euros");
console.log("Barquillo de dos bolas: " + barquilloDosBolas + " euros");
console.log("Barquillo de tres bolas: " + barquilloTresBolas + " euros");
