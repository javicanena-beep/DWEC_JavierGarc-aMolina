import "./style.css";
import { estado } from "./estado.js";
import { render } from "./dom.js";

const titulo = document.querySelector("h1");
titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

console.table(estado.tareas);
render();
