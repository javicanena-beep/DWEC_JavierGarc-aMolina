import "./style.css";
import { estado } from "./estado.js";
import { render } from "./dom.js";
import { agregarTarea, toggleTarea, borrarTarea } from "./tareas.js";

const titulo = document.querySelector("h1");
titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

console.table(estado.tareas);
render();

const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});

const form = document.querySelector("#form-tarea");
const input = document.querySelector("#input-tarea");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const texto = input.value.trim();
  if (!texto) return;

  estado.tareas = agregarTarea(estado.tareas, texto);
  input.value = "";
  input.focus();
  render();
});

const lista = document.querySelector("#lista");

lista.addEventListener("click", (e) => {
  const boton = e.target.closest("button[data-accion]");
  if (!boton) return;

  const li = boton.closest("li");
  const id = Number(li.dataset.id);
  const accion = boton.dataset.accion;

  if (accion === "toggle") {
    estado.tareas = toggleTarea(estado.tareas, id);
  } else if (accion === "borrar") {
    estado.tareas = borrarTarea(estado.tareas, id);
  }

  render();
});
