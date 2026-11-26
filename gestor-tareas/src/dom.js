import { estado } from "./estado.js";
import { contarCompletadas, contarPendientes } from "./tareas.js";

export function render() {
  const lista = document.querySelector("#lista");
  lista.replaceChildren();

  estado.tareas.forEach((tarea) => {
    const elemento = document.createElement("li");
    elemento.dataset.id = String(tarea.id);

    if (tarea.completada) {
      elemento.classList.add("completada");
    }

    const texto = document.createElement("span");
    texto.textContent = tarea.texto;

    const botonToggle = document.createElement("button");
    botonToggle.type = "button";
    botonToggle.textContent = tarea.completada ? "Desmarcar" : "Completar";
    botonToggle.dataset.accion = "toggle";

    const botonBorrar = document.createElement("button");
    botonBorrar.type = "button";
    botonBorrar.textContent = "✕";
    botonBorrar.dataset.accion = "borrar";

    elemento.append(texto, botonToggle, botonBorrar);
    lista.append(elemento);
  });

  const completadas = contarCompletadas(estado.tareas);
  const pendientes = contarPendientes(estado.tareas);
  document.querySelector("#resumen").textContent =
    `${completadas} completadas · ${pendientes} pendientes`;
}
