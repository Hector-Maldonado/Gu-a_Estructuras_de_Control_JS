/*
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.
       */
let cantNegativos = 0;
let cantPositivos = 0;
let mult15 = 0;
let acumuladoPares = 0;
for (let val = 1; val <= 10; val++) {
    let valor = parseInt(prompt('Debe Ingresar 10 valores (Ingrese un valor:)'));
    if (valor < 0) {
        cantNegativos++;
    } else {
        if (valor > 0) {
            cantPositivos++;
        }
    }
    if (valor % 15 == 0 && valor != 0) {
        mult15++;
    }
    if (valor % 2 === 0) {
        acumuladoPares += valor;
    }
}

//Imprimiendo resultados desde el DOM
let tutulo = document.getElementById('titulo');
let cantidadNegativos = document.getElementById('cantNegativos');
let cantidadPositivos = document.getElementById('cantPositivos');
let multiplos15 = document.getElementById('mult15');
let valorAcumulado = document.getElementById('valorAcumulado');


titulo.innerText = "EJERCICIO 7";
cantidadNegativos.innerText = "Cantidad de valores negativos: " + cantNegativos;
cantidadPositivos.innerText = "Cantidad de valores positivos: " + cantPositivos;
multiplos15.innerText = "Cantidad de múltiplos de 15: " + mult15;
valorAcumulado.innerText = "Valor acumulado de los números ingresados que son pares ingresados: " + acumuladoPares;
