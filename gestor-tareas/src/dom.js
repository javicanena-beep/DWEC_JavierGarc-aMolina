import { estado } from "./estado.js";
import { contarCompletadas, contarPendientes } from "./tareas.js";

export function render() {
  // Arreglo 1: getElementById recibe el id sin #.
  // Antes aparecia "lista is null" y no se podia usar replaceChildren ni append.
  // La linea del selector era const lista = document.getElementById("#lista").
  const lista = document.getElementById("lista");
  lista.replaceChildren();

  estado.tareas.forEach((tarea) => {
    const elemento = document.createElement("li");
    elemento.textContent = tarea.texto;
    // Arreglo 2: antes, tarea.completada = true asignaba el valor en vez de comparar.
    // Esto marcaba todas las tareas como completadas.
    if (tarea.completada === true) {
      elemento.classList.add("completada");
    }
    lista.append(elemento);
  });

  // Arreglo 3: reemplazar replaceChildren dentro del bucle evita borrar tareas anteriores.
  // Ya se ejecuta una sola vez al iniciar render().
  const completadas = contarCompletadas(estado.tareas);
  const pendientes = contarPendientes(estado.tareas);
  // Arreglo 4: contarPendientes es una funcion y hay que llamarla con el array.
  document.querySelector("#resumen").textContent =
    `${completadas} completadas · ${pendientes} pendientes`;
}
