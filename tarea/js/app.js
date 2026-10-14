import estudiantes, { curso } from "./datos.js";
import { reporte } from "./calculos.js";

const nuevoEstudiante = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevoEstudiante];

console.log(`Curso: ${curso}`);

const listaHTML = document.querySelector("#reportes");

todos.forEach((estudiante) => {
  const lineaReporte = reporte(estudiante);
  console.log(lineaReporte);
  if (listaHTML) {
    listaHTML.innerHTML += `<li>${lineaReporte}</li>`;
  }
});
