//Condicionales Switch

let miDesayuno = "huevos";

switch (miDesayuno) {
    case "tortitas":
        console.log("Has seleccionado el desayuno de tortitas de cirope de arce.");
        break;
    case "huevos":
        console.log("Has seleccionado el desayuno de huevos fritos con bacon.");
        break;
    case "pan":
        console.log("Has seleccionado el desayuno de pan con queso.");
        break;
    default:
        console.log("Has elegido otro desayuno");
}

//Condicional Ternario

let nombre = "Juan Alberto"
let edad = 1;

let resultado = (edad >= 18) ? "Puedes votar" : "No puedes votar";
console.log(nombre + " " + resultado + " por que tiene  " + edad);

//Diferencias entre var y let (ambito/bloque)