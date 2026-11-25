import pc from "picocolors";

const facturas = [
  { id: 101, cliente: "Comercial Alfa", total: 300, pagada: true },
  { id: 102, cliente: "Desarrollos Beta", total: 550, pagada: false },
  { id: 103, cliente: "Logística Gamma", total: 180, pagada: false },
];

facturas.forEach(({ id, cliente, total, pagada }) => {
  const etiqueta = pagada
    ? pc.green("✓ PAGADA")
    : pc.red("✗ PENDIENTE");

  console.log(`[#${id}] ${cliente} - ${total}€ -> ${etiqueta}`);
});

const totalPendiente = facturas
  .filter((factura) => !factura.pagada)
  .reduce((suma, factura) => suma + factura.total, 0);

console.log(`\nTotal por cobrar: ${totalPendiente}€`);
