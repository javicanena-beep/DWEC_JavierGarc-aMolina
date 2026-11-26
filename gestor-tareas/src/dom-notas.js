import { alumnos, calcularMedia, contarAprobados } from "./notas.js";

export function renderNotas() {
  const lista = document.getElementById("lista-notas");
  lista.replaceChildren();

  const alumnosOrdenados = [...alumnos].sort((a, b) => b.nota - a.nota);
  alumnosOrdenados.forEach((alumno) => {
    const li = document.createElement("li");
    li.textContent = `${alumno.nombre} — ${alumno.nota}`;
    li.classList.add(alumno.nota >= 5 ? "aprobado" : "suspenso");
    lista.append(li);
  });

  const media = calcularMedia(alumnos);
  const aprobados = contarAprobados(alumnos);
  document.getElementById("resumen-notas").textContent =
    `Media: ${media.toFixed(1)} · Aprobados: ${aprobados} de ${alumnos.length}`;
}
