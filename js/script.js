// Object literal
/* var quagendas = {
    nombre: '',
    precio: 1400,
    cantidad: 0
}
var cuadernos = {
    nombre: '',
    precio: 1000,
    cantidad: 0
}
var bitacoras = {
    nombre: '',
    precio: 1000,
    cantidad: 0
} */

// Object contructor
function Producto(nombre, precio, cantidad) {
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
}

/* quagenda = new Producto('Viajar', 1400, 1);
console.log(quagenda)
console.log(quagendas) */


var carrito = [];

// Function declaration
let agregarCarrito = (nombre, precio) => {

    if (carrito.lenght > 0) { // Recorremos el carrito con ciclo FOR
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].nombre == nombre) {
                carrito[i].cantidad += 1
            } else {
                agregarProducto = new Producto(nombre, precio, 1);
            }

        }
        agregarProducto = new Producto(nombre, precio, 1);

        carrito.push(agregarProducto)
    }
};

agregarCarrito('Viajar', 1460) // Se puede llamar antes de definir la funcion
agregarCarrito('Luna', 170)
agregarCarrito('Sol', 146)
agregarCarrito('Cuad', 60)
agregarCarrito('Fede', 460)
agregarCarrito('Cami', 10)
agregarCarrito('Beltran', 200)
agregarCarrito('Beltran', 200)

console.table(carrito)


// Recorremos el carrit con ciclo FOR
/* for (let i = 0; i < carrito.length; i++) {
    console.log(`El prodcuto ${
        carrito[i].nombre
    } cuesta: ${
        carrito[i].precio
    }`)
} */


// Funcion Expression (No se usa mucho)
/* var miFunction = function agregarCarrito(nom, precio, cant) {

    const agregarProducto = {
        nombre: nom,
        precio: precio,
        cantidad: cant
    }

    carrito.push(agregarProducto)

};

// se llama despues de definirla
console.log(miFunction) ????
 */
