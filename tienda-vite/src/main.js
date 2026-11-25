import './style.css'
import confetti from "canvas-confetti";
import { productos, calcularStockTotal } from "./catalogo.js";

const stockTotal = calcularStockTotal(productos);

console.log(`Stock total: ${stockTotal}`);

confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
});