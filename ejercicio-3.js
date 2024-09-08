//Ejercicio #3

/*
CATEGORIA AUMENTO
  A         15%
  B         30%
  C         10%
  D         20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.

*/

let nombre = "Hector Maldonado";
let salario = 1500;
let categoria = "B";
let aumentoPorcentaje = 0;


if (categoria == "A") {
  aumentoPorcentaje = 0.15
} else if (categoria == "B") {
  aumentoPorcentaje = 0.30
} else if (categoria == "C") {
  aumentoPorcentaje = 0.10
} else if (categoria == "D") {
  aumentoPorcentaje = 0.20
} else {
  console.log('Ingrese una categoria valida');
}

//calculando el aumento y el nuevo salario
let aumento = salario * aumentoPorcentaje;
let salarioNuevo = salario + aumento;

console.log("Nombre del Empleado: " + nombre);
console.log("Salario Actual: " + salario);
console.log("Categoria de Aumento: " + categoria);
console.log("Aumento Salarial: " + aumento);
console.log("Nuevo Salario: " + salarioNuevo);

