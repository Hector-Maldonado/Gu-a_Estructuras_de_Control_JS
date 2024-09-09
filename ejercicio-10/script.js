/*
 Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor.
        */

let suma1 = 0;
for (let m = 1; m <= 5; m++) {
    let edad = parseInt(prompt('Ingrese la edad de estudiante del turno MAÑANA:'));
    suma1 = suma1 + edad;
}
let suma2 = 0;
for (let t = 1; t <= 6; t++) {
    let edad = parseInt(prompt('Ingrese la edad de estudiante del turno TARDE:'));
    suma2 = suma2 + edad;
}
let suma3 = 0;
for (let n = 1; n <= 11; n++) {
    let edad = parseInt(prompt('Ingrese la edad de estudiante del turno NOCHE:'));
    suma3 = suma3 + edad;
}
let promedio1 = suma1 / 5;
let promedio2 = suma2 / 6;
let promedio3 = suma3 / 11;

//Mostrando resultados desde JS
let titulo = document.getElementById('titulo')
titulo.innerText = "EJERCICIO 10"

let promedioManana = document.getElementById('promedioManana')
let promedioTarde = document.getElementById('promedioTarde')
let promedioNoche = document.getElementById('promedioNoche')
let promedioMayor = document.getElementById('promedioMayor')

promedioManana.innerText = "Promedio de edades de alumnos del turno mañana: " + promedio1;
promedioTarde.innerText = "Promedio de edades de alumnos del turno tarde: " + promedio2;
promedioNoche.innerText = "Promedio de edades de alumnos del turno noche: " + promedio3;


if (promedio1 > promedio2 && promedio1 > promedio3) {
    promedioMayor.innerText = "EL TURNO MAÑANA TIENE UN PROMEDIO MAYOR DE EDADES";
}else if (promedio2 > promedio1 && promedio2 > promedio3){
    promedioMayor.innerText = "EL TURNO TARDE TIENE UN PROMEDIO MAYOR DE EDADES";
} else {
   
    promedioMayor.innerText = "EL TURNO NOCHE TIENE UN PROMEDIO MAYOR DE EDADES";

}