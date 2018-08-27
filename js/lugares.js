lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
        var circulo = new google.maps.Circle({
          center: posicionCentral,
          map: mapa,
          radius: 20000,
          visible: false
        })
        var autocompletarDireccion = new google.maps.places.Autocomplete(document.getElementById("direccion"));
        autocompletarDireccion.setBounds(circulo.getBounds());
        var autocompletarDireccion = new google.maps.places.Autocomplete(document.getElementById("desde"));
        autocompletarDireccion.setBounds(circulo.getBounds());
        var autocompletarDireccion = new google.maps.places.Autocomplete(document.getElementById("hasta"));
        autocompletarDireccion.setBounds(circulo.getBounds());
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */
    var radio = Number(document.getElementById("radio").value);
    servicioLugares = new google.maps.places.PlacesService(mapa);
    servicioLugares.nearbySearch(
      { location: posicion,
        radius: radio,
        type: document.getElementById("tipoDeLugar").value
      },
        marcadorModulo.marcarLugares
      )
  }
  return {
    inicializar,
    buscarCerca
  }
})()
