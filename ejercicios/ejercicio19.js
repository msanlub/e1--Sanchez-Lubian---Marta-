/*Ejercicio 19: Factorial de un Número
Escribe un script que calcule el factorial de un número introducido por el usuario.
 El factorial de un número n es el producto de todos los números enteros desde 1 hasta n.
Objetivos:
Reforzar el uso de bucles para cálculos matemáticos.
*/

let numb;
let factorial;

do {
    numb = prompt("Indica un número entero: ");

}while (isNaN(numb) || numb <= 0 || numb.includes('.'));

numb = +numb;
for (i = 1;i < numb;i++){
    factorial = numb*i;
}

console.log("El factorial de " + numb + " es: " + factorial);