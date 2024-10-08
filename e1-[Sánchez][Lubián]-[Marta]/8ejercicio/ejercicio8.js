/*
Ejercicio 8: Condicionales y Decisiones
Escribe un script que pida al usuario su edad y determine si es mayor o menor de edad. Usa una estructura if...else.
Añade una segunda condición que verifique si el usuario tiene entre 18 y 25 años, mostrando un mensaje específico en ese caso.
Objetivos:
Practicar el uso de estructuras condicionales y tomar decisiones con base en los datos introducidos.
*/

console.log("EJERCICIO 8")

let edad;
let mensajeEdad;

do{
    edad = prompt("Indique su edad: ");
    edad = +edad;
} while (isNaN(edad) || edad <= 0 || !Number.isInteger(edad))


if (edad >= 18){
    console.log("Mayor de edad.")
        if (edad >= 18 && edad <= 25){
            mensajeEdad = "Estás en la edad perfecta."
            console.log(mensajeEdad)
        } 
    }else {
        console.log("Menor de edad.")
    }


console.log("------------------------------------------")