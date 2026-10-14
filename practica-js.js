// practica-js.js - Taller JavaScript aplicado a React

console.log("JavaScript listo para practicar");

// ========== RETO 1: Funciones ==========
function calcularTotal(precio, cantidad) {
  const total = precio * cantidad;
  return total;
}
console.log(calcularTotal(50000, 3)); // 150000

function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}
function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

console.log(sumar(10, 5));
console.log(restar(10, 5));
console.log(multiplicar(10, 5));
console.log(dividir(10, 5));
console.log(calcularPromedio(4, 3, 5));

// Diferencia: console.log muestra en consola.
// return devuelve el valor para usarlo después.

// ========== RETO 2: Funciones flecha ==========
const aplicarIva = (precio) => precio * 1.19;
const cuadrado = (numero) => numero * numero;
const esMayorEdad = (edad) => edad >= 18;
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

console.log(aplicarIva(100000));
console.log(cuadrado(5));
console.log(esMayorEdad(20));
console.log(nombreCompleto("Ana", "Lopez"));

// ========== RETO 3: Arreglo de productos ==========
const productos = [
  { id: 1, nombre: "Mouse", precio: 50000, categoria: "Perifericos", stock: 5 },
  { id: 2, nombre: "Teclado", precio: 90000, categoria: "Perifericos", stock: 0 },
  { id: 3, nombre: "Monitor", precio: 650000, categoria: "Pantallas", stock: 3 },
  { id: 4, nombre: "Auriculares", precio: 120000, categoria: "Audio", stock: 8 },
  { id: 5, nombre: "Webcam", precio: 180000, categoria: "Perifericos", stock: 2 },
  { id: 6, nombre: "SSD 1TB", precio: 350000, categoria: "Almacenamiento", stock: 4 },
  { id: 7, nombre: "RAM 16GB", precio: 280000, categoria: "Componentes", stock: 0 },
  { id: 8, nombre: "Soporte Laptop", precio: 75000, categoria: "Accesorios", stock: 12 },
  { id: 9, nombre: "Hub USB", precio: 95000, categoria: "Perifericos", stock: 6 },
  { id: 10, nombre: "Monitor 4K", precio: 1200000, categoria: "Pantallas", stock: 1 },
];

// ========== RETO 4: forEach ==========
productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`);
});

// ========== RETO 5: map ==========
const nombres = productos.map((producto) => producto.nombre);
const preciosConIva = productos.map((producto) => producto.precio * 1.19);
const nombresMayuscula = productos.map((producto) => producto.nombre.toUpperCase());
const resumenProductos = productos.map((producto) => `${producto.nombre} cuesta $${producto.precio}`);

console.log(nombres);
console.log(preciosConIva);
console.log(nombresMayuscula);
console.log(resumenProductos);

// ========== RETO 6: filter y find ==========
const disponibles = productos.filter((producto) => producto.stock > 0);
const precioAlto = productos.filter((producto) => producto.precio > 100000);
const precioRango = productos.filter((producto) => producto.precio >= 50000 && producto.precio <= 200000);
const categoriaPerifericos = productos.filter((producto) => producto.categoria === "Perifericos");
const producto5 = productos.find((producto) => producto.id === 5);

function buscarProducto(id) {
  return productos.find((producto) => producto.id === id);
}

console.log(disponibles);
console.log(precioAlto);
console.log(precioRango);
console.log(categoriaPerifericos);
console.log(producto5);
console.log(buscarProducto(3));

// ========== RETO 7: some, every, reduce ==========
const hayAgotados = productos.some((producto) => producto.stock === 0);
const hayMuyCaro = productos.some((producto) => producto.precio > 1000000);
const preciosValidos = productos.every((producto) => producto.precio > 0);
const stockValido = productos.every((producto) => producto.stock >= 0);
const valorInventario = productos.reduce((total, producto) => total + producto.precio * producto.stock, 0);

console.log("¿Hay agotados?", hayAgotados);
console.log("¿Hay > $1.000.000?", hayMuyCaro);
console.log("¿Todos precio > 0?", preciosValidos);
console.log("¿Todos stock >= 0?", stockValido);
console.log("Valor inventario:", valorInventario);

// ========== RETO 8: JavaScript moderno ==========
console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);

const productoActualizado = { ...productos[0], stock: 8 };
const estado = productoActualizado.stock > 0 ? "Disponible" : "Agotado";
console.log(estado);

const productoCopiado = { ...productos[3], precio: 110000, stock: 10 };
const estadoCopia = productoCopiado.stock > 0 ? "Disponible" : "Agotado";
console.log(`El producto ${productoCopiado.nombre} cuesta $${productoCopiado.precio} y está ${estadoCopia}`);
