//ejercicio #8
/*
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.
 */

function tablaMultiplicar(numero) {

    for (let i = 1; i <= 10; i++) {
      console.log(numero + " x " + i + " = " + numero * i);
    }
  
  }
  tablaMultiplicar(2);