import "./style.css";
import { estado } from "./estado.js";
import { render } from "./dom.js";
import { renderNotas } from "./dom-notas.js";

const titulo = document.querySelector("h1");
titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

console.table(estado.tareas);
render();
renderNotas();

/*
Reto 1: predicciones y resultado

// Código probado con comentarios y sin ejecutarlo como parte de la aplicación:
// const lista = document.querySelector("#lista");
// const vivos = document.getElementsByClassName("prueba");
// const foto = document.querySelectorAll(".prueba");
// console.log("A:", vivos.length, foto.length);
// const li = document.createElement("li");
// li.className = "prueba";
// li.textContent = "<b>Nueva</b>";
// lista.append(li);
// console.log("B:", vivos.length, foto.length);
// const h1 = document.querySelector("h1");
// h1.innerHTML = "<em>Gestor</em>";
// console.log("C:", h1.textContent, h1.children.length);
// console.log("D:", document.getElementById("#lista"));

// A: 0, 0
// B: 1, 0
// C: "Gestor", 1
// D: null
// El li nuevo mostraria el texto literal "<b>Nueva</b>", no una etiqueta negrita,
// porque textContent no interpreta HTML.

// Comparacion:
// A acerto: al iniciar no habia elementos con la clase prueba.
// B acerto en vivos: HTMLCollection viva; fallo en foto: NodeList estatica.
// C acerto: textContent elimina etiquetas y children contiene el em.
// D acerto: getElementById no usa el selector "#lista".
*/
