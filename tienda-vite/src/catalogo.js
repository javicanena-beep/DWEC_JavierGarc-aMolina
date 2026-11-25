export const productos = [
  { nombre: "Cuaderno", precio: 4.5, stock: 12 },
  { nombre: "Bolígrafo", precio: 1.25, stock: 30 },
  { nombre: "Mochila", precio: 28, stock: 5 },
];

export function calcularStockTotal(lista) {
  return lista.reduce((total, producto) => total + producto.stock, 0);
}