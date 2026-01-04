/*
Ejercicio 06:

En mi tienda de videojuegos tenemos una oferta.

Si compras un juego de 50 euros, ten hacemos un 20% de descuento.

Si un cliente compra el Tekken 15 que cuesta 50 euros, ¿en cuanto se le queda?

*/

const compraCliente = 50;
const descuento = 20;
let descuentoCliente = compraCliente * descuento / 100;
let totalAPagar = compraCliente - descuentoCliente;
console.log("El cliente compro un total de " + compraCliente + " euros y como cumple con la oferta de la tienda se le hara un descuento del" + descuento + "%, por lo que el total a pagar es " + totalAPagar + " euros");

