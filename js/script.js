// ------------- Crear const con mis productos ---------------------
// const viajar = ;
// const luna = ;
// const sol = ;
// const sol1 = ;
// const sol2 = ;

// ------------- Crear los elementos  que cuando -------------------
// ------------- hacemos click en agregar al carrito ---------------
// ------------- le de parametros a la funcion ---------------------
// ------------- agregarCarrito(nombre, precio)---------------------

// ------------- Alerta cuando agregamos al carrito ---------------------
function alerta() {
    alert('Producto agregado al carrito de compras') // Solo de manera ilustrativa el alert
}

// ------------- Creamos Objetos con productos ---------------------
function Producto(nombre, precio, cantidad) {
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
}

// ------------- Array Carrito vacio para agregar productos ---------------------
var carrito = [];


// ------------- Function declaration ------------------------------

// let agregarCarrito = (nombre, precio) => Arrow Function no se si funciona
function agregarCarrito(nombre, precio) {

    var encontrarProd = carrito.find(producto => producto.nombre == nombre)

    if (encontrarProd) {
        encontrarProd.cantidad ++;
        // function con alerta de confirmacion

    } else {
        agregarProducto = new Producto(nombre, precio, 1);
        carrito.push(agregarProducto)

    }
};

agregarCarrito('Viajar es la respuesta', 1460) // Se puede llamar antes de definir la funcion
agregarCarrito('Apunta a la luna', 1300)
agregarCarrito('Apunta a la luna', 1300)
agregarCarrito('Mejor hecho', 1250)
agregarCarrito('Disena la vida', 1200)
agregarCarrito('Disena la vida', 1200)
agregarCarrito('Disena la vida', 1200)
agregarCarrito('Disena la vida', 1200)
agregarCarrito('Disena la vida', 1200)
agregarCarrito('Disena la vida', 1200)


console.table(carrito)
// console.log(carrito[3].precio)
// var tipo = typeof(carrito)
// console.log(tipo)
