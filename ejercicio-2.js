//Ejercicio #2
/*
Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
*/
function notaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
  let nota_final = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

  console.log("Nombre del Alumno:" + nombre);
  console.log("Carnet del Alumno:" + carnet);
  console.log("Nota Final del Alumno:" + nota_final);


}
notaFinal("Hector Maldondo", "k00002589", 9, 8, 9, 10);