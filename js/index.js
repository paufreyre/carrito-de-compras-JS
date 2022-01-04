
/*Constructor y Productos*/

function Producto(img, id, nombre, precio, disponible, cantidad) {
    this.img = img;
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
    this.cantidad = cantidad;
  }
  
  const producto1 = new Producto("Producto01", 1, "Blusa Elisa", 2300, true, 1)
  const producto2 = new Producto("Producto02", 2, "Blusa Karen", 2600, true, 1)
  const producto3 = new Producto("Producto03", 3, "Jean Zoe", 4700, true, 1)
  const producto4 = new Producto("Producto04", 4, "Jean Juana", 4400, true, 1)
  const producto5 = new Producto("Producto05", 5, "Jean Mery", 2300, true, 1)
  const producto6 = new Producto("Producto06", 6, "Remera Mia", 2600, true, 1)
  const producto7 = new Producto("Producto07", 7, "Remera Tiara", 4700, true, 1)
  const producto8 = new Producto("Producto08", 8, "Short Susan", 4400, true, 1)
  const producto9 = new Producto("Producto09", 9, "Short Lupe", 4000, true, 1)
  
  /*Variables*/
  
  let stockProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9];
  let carrito = [];
  const contenedorProductos = document.getElementById('main')
  const contenedorCarrito = document.getElementById('carrito-contenedor')
  const contadorCarrito = document.getElementById('contador-carrito')
  const precioTotal = document.getElementById('precioTotal')
  
  /*Productos*/
  
  mostrarProductos(stockProductos);
  
  function mostrarProductos(array) {
    contenedorProductos.innerHTML = ''
    array.forEach((producto) => {
      let div = document.createElement('div')
      div.classList.add('card')
      div.innerHTML += `
      <div>
                <img src="../img/${producto.img}.jpg" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="precio">$ ${producto.precio}</p>
                <div class= "middle"> <button id="boton${producto.id}" class="btn-primary">Agregar al carrito</button> </div>
                   `
    
              
      contenedorProductos.appendChild(div)
  
      let boton = document.getElementById(`boton${producto.id}`)
  
      boton.addEventListener('click', () => {
        añadirAlCarrito(producto.id)
      })
    })
  }
  
  /*Carrito*/
  
  function añadirAlCarrito(id) {
    let validar = carrito.some(x => x.id == id)
    if (validar) {
      let count = document.getElementById(`cantidad${id}`)
      carrito.map(x => {
        if (x.id == id)
          count.innerText = `${x.cantidad +=1}`
        actualizarCarrito()
      })
    } else {
      let productoAñadir = stockProductos.filter(x => x.id == id)[0]
      carrito.push(productoAñadir)
      console.log(carrito)
      actualizarCarrito()
  
  
      let div = document.createElement('div')
      div.classList.add('productoEnCarrito')
      div.innerHTML += `
          <p class="carrito-text">${productoAñadir.nombre}</p>
          <p class="carrito-text carrito-precio"> $${productoAñadir.precio}</p>
          <p class ="carrito-text carrito-cant" id="cantidad${productoAñadir.id}"> ${productoAñadir.cantidad}</p>
          <button id="eliminar${productoAñadir.id}" class="boton-eliminar"><i class="fa fa-trash"></i></button>
        `
      contenedorCarrito.appendChild(div)
      let botonEliminar = document.getElementById(`eliminar${productoAñadir.id}`)
  
      botonEliminar.addEventListener('click', () => {
        botonEliminar.parentElement.remove()
        carrito = carrito.filter((x) => x.id != productoAñadir.id)
        actualizarCarrito()
        console.log(carrito)
      })
    }
  }
  
  /*Guardar Carrito*/
  
  function actualizarCarrito() {
    contadorCarrito.innerText = carrito.reduce((acc, x) => acc + x.cantidad, 0)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    precioTotal.innerText = carrito.reduce((acc, x) => acc + (x.precio * x.cantidad), 0)
  }
  
  
  function revisarLocal() {
    let carritoLocal = JSON.parse(localStorage.getItem('carrito'))
    if (carritoLocal) {
      carritoLocal.forEach((x) => añadirAlCarrito(x.id))
    }
  }
  
  revisarLocal()
  
  /*Ventana Modal*/
  
  const carritoAbrir = document.getElementById('btn-carrito');
  const ventanaModal = document.getElementsByClassName('modal-ventana')[0]
  const carritoCerrar = document.getElementById('carritoCerrar');
  const btnVolver = document.getElementById('btnVolver');
  
  carritoAbrir.addEventListener('click', () => {
    ventanaModal.classList.toggle('modal-active')
  })
  
  carritoCerrar.addEventListener('click', () => {
    ventanaModal.classList.toggle('modal-active')
  })
  
  btnVolver.addEventListener('click', () => {
    ventanaModal.classList.toggle('modal-active')
  })

  // ANIMACIONES
$('.titulo').fadeOut();
$('.titulo').fadeIn();
$('.titulo').fadeOut();
$('.titulo').fadeIn(2000);