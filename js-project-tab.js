function filtrarProductos() {
  var filtroDebito = document.getElementById('filtroDebito').checked;
  var filtroCredito = document.getElementById('filtroCredito').checked;

  var listaProductos = document.querySelectorAll('#listaProductos li');

  listaProductos.forEach(function(producto) {
    var tipo = producto.getAttribute('data-tipo');
    var mostrar = (filtroDebito && tipo.includes('debito')) || (filtroCredito && tipo.includes('credito'));

    if (mostrar) {
      producto.style.display = 'block';
    } else {
      producto.style.display = 'none';
    }
  });
}

// Inicializar la lista de productos mostrando inicialmente los de débito
filtrarProductos();