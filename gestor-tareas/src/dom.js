import { estado } from "./estado.js";
import { contarCompletadas, contarPendientes } from "./tareas.js";

export function render() {
  const lista = document.querySelector("#lista");
  lista.replaceChildren();

  estado.tareas.forEach((tarea) => {
    const elemento = document.createElement("li");
    elemento.textContent = tarea.texto;
    if (tarea.completada) {
      elemento.classList.add("completada");
    }
    lista.append(elemento);
  });

  const completadas = contarCompletadas(estado.tareas);
  const pendientes = contarPendientes(estado.tareas);
  document.querySelector("#resumen").textContent =
    `${completadas} completadas · ${pendientes} pendientes`;
}
