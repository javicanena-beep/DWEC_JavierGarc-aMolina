import "./style.css";
import { estado } from "./estado.js";
import { contarCompletadas, contarPendientes } from "./tareas.js";

const titulo = document.querySelector("h1");
titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

// 1. Muestra los datos estructurados en la consola de DevTools
console.table(estado.tareas);

// 2. Calcula las pendientes y muestra un resumen en el contenedor de la página
const pendientes = contarPendientes(estado.tareas);
const completadas = contarCompletadas(estado.tareas);
document.querySelector("#resumen").textContent = `${completadas} completadas, ${pendientes} pendientes`;

const lista = document.querySelector("#lista");
["Preparar el proyecto", "Crear una tarea", "Marcar una tarea completada"].forEach((texto) => {
  const elemento = document.createElement("li");
  elemento.classList.add("demo");
  elemento.textContent = texto;
  lista.append(elemento);
});

// La NodeList de querySelectorAll es estática.
document.querySelectorAll("#lista .demo").forEach((elemento) => {
  elemento.textContent = `- ${elemento.textContent}`;
});

// getElementById recibe el id sin #.
const listaDemo = document.getElementById("lista");
// getElementsByClassName recibe la clase sin punto; su HTMLCollection es viva.
const elementosDemo = listaDemo.getElementsByClassName("demo");
// TypeError: elementosDemo.forEach is not a function
// elementosDemo.forEach((elemento) => { ... });
Array.from(elementosDemo).forEach((elemento) => {
  elemento.textContent = `✓ ${elemento.textContent.slice(2)}`;
});
