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

//Ejemplo 4:
let buenTiempo = true;

if (!buenTiempo) {
    console.log("Nos vamos al parque a pasear");
} else {
    console.log("Nos quedamos en casa");
}


//Ejemplo 5:

let year = 2028;

if (year >= 2000 && year <= 2030) {
    console.log("Estamos en la era moderna");
} else if (year >= 2030) {
    console.log("Estamos en la era post moderna");
} else {
    console.log("Estamos en la era antigua");
}


// Ejemplo 6:

if (year == 2007 || year == 2017 || year == 2027 || year == 2037) {

    console.log("El año acaba en 7 !!!");

} else {

    console.log("Año desconocido!!");

}