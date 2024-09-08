function calcularDescuento() {
    const modeloCoche = document.getElementById('coches').value;
    let descuento = 0;
    let cocheSeleccionado = '';

    if (modeloCoche === 'ford_fiesta') {
      descuento = 5;
      cocheSeleccionado = 'FORD FIESTA';
    } else if (modeloCoche === 'ford_focus') {
      descuento = 10;
      cocheSeleccionado = 'FORD FOCUS';
    } else if (modeloCoche === 'ford_escape') {
      descuento = 20;
      cocheSeleccionado = 'FORD ESCAPE';
    } else {
      cocheSeleccionado = 'No selecciono ningun coche';
    }

    document.getElementById('cocheSeleccionado').innerText = cocheSeleccionado;
    document.getElementById('descuentoAplicado').innerText = descuento + '% de descuento';


  }



  