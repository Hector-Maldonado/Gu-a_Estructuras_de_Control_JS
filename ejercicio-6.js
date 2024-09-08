//Ejercicio #6
/*
Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.
*/

function calcularDescuento(origen, destino) {
    origen = origen.toLowerCase();
    destino = destino.toLowerCase();
  
    if (origen === "palma" && destino === "la costa del sol") {
      return 5;
    } else if (origen === "palma" && destino === "panchimalco") {
      return 10;
    } else if (origen === "palma" && destino === "puerto el triunfo") {
      return 15;
    } else {
      return 0;
    }
  }
  
  let origen = "Palma";
  let destino = "puerto el triunfo";
  
  const descuento = calcularDescuento(origen, destino);
  
  console.log("El descuento para el viaje desde " + origen + " hacia " + destino + " es del " + descuento + "%.");
  