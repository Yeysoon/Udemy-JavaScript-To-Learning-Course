/* Condicional IF

Permite tomar una decision

Por ejemplo si A es igual a B entonces haz algo.

Ejemplo 1: 


*/

let estaLloviendo = true;

if (estaLloviendo == true) {

    //si se cumple la condicion se ejecuta este bloque de codigo
    console.log("Lleva paraguas");
} else {
    //si no se cumple la condicion se ejecuta este bloque de codigo
    console.log("No lleva paraguas");
}

//Ejemplo 2:

let quieroCebolla = true;

if (quieroCebolla == true) {
    console.log("tu hamburgesa llevara cebolla");
} else {
    console.log("tu hamburgesa no llevara cebolla");
}


//Ejemplo 3:

let nombre2 = "Joaquin Perez";
let edad2 = 17;

if (edad2 >= 18) {
    // Es mayor de edad
    console.log(nombre2 + " tiene " + edad2 + " años y es mayor de edad");

    if (edad2 <= 20) {
        console.log("Es un adolescente");

    } else if (edad2 >= 70) {
        console.log("Es un anciano");

    } else {
        console.log("Es un adulto");
    }

} else {
    console.log(nombre2 + " tiene " + edad2 + " años y es menor de edad");
}