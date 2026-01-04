//Operadores de tipo typeof
/*
let nombre = "Miguel";
let edad = 25;
let precio = 25.5;
let mayorEdad = true;
let vacia;
let nula = null;
let fruta = ["Manzana", "Banana", "Mango"];
let persona = { nombre: "Miguel", universo: "DC" };

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof precio);
console.log(typeof mayorEdad);
console.log(typeof vacia);
console.log(typeof nula);
console.log(Array.isArray(fruta));
console.log(typeof persona);*/


//operadores aritmeticos o matematicos
/*
let numero1 = 10;
let numero2 = 20;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;
let potencia = numero1 ** numero2;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicacion: " + multiplicacion);
console.log("Division: " + division);
console.log("Modulo: " + modulo);
console.log("Potencia: " + potencia);*/


//operadores de asignacion
/*
let numerito = 17;
let numerito2 = 17;
let numerito3 = 17;
let numerito4 = 17;
let numerito5 = 17;
let numerito6 = 17;
numerito2 += 5;
numerito3 -= 5;
numerito4 *= 5;
numerito5 /= 5;
numerito6 %= 5;
console.log("Suma: " + numerito);
console.log("Resta: " + numerito2);
console.log("Multiplicacion: " + numerito3);
console.log("Division: " + numerito4);
console.log("Modulo: " + numerito5);
console.log("Potencia: " + numerito6);*/

//operadores de comparacion
/*
let numerazo = 31;
console.warn(numerazo == "31");
console.warn(numerazo === "31");
console.warn(numerazo != "31");
console.warn(numerazo !== "31");
console.warn(numerazo > "31");
console.warn(numerazo < "31");
console.warn(numerazo >= "31");
console.warn(numerazo <= "31");*/


//operadores logicos

let esMayorDeEdad = true;
let tieneEntrada = false;

console.log(esMayorDeEdad && tieneEntrada);
console.log(esMayorDeEdad || tieneEntrada);
console.log(!esMayorDeEdad);

//operadores de cadena

let mesaje1 = "Hola";
let mesaje2 = "Miguel";
let mesaje_total = mesaje1 + " " + mesaje2;

mesaje_total += " Como estas?";

console.log(mesaje_total);
//operadores de incremento y decremento 

let cifra = 1200;
cifra++;
console.log(cifra);
