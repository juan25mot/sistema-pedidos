// FAST & TASTY

const productosComidaRapida = [
  "Hamburguesa clásica",
  "Hamburguesa con queso",
  "Papas fritas",
  "Nuggets de pollo",
  "Pizza personal",
  "Hot dog",
  "Alitas de pollo",
  "Aros de cebolla",
  "Tacos",
  "Burritos",
  "Refresco grande",
  "Malteada de vainilla",
];










function mostrarConteoPedidos() {
    console.log('\n--- REPORTE: Conteo de Pedidos por Estado ---');
    let conteo = {};

    // Recorremos cada pedido y contamos según su estado
    Pedidos.forEach(p => {
        if (p.estado) {
            const estado = p.estado.toLowerCase();
            conteo[estado] = (conteo[estado] || 0) + 1;
        }
    });

    for (const estado in conteo) {
        // Formateo del estado para mostrar la primera letra en mayúscula
        console.log(`${estado.charAt(0).toUpperCase() + estado.slice(1)}s: ${conteo[estado]}`);
    }
}

/**
 * Calcula y muestra el total de ventas (suma de pedidos entregados).
 */
function calcularTotalVentas() {
    let totalVentas = 0;

    // Recorremos cada pedido y sumamos si está entregado
    Pedidos.forEach(p => {
        if (p.estado && p.estado.toLowerCase() === 'entregado' && typeof p.total === 'number') {
            totalVentas += p.total;
        }
    });

    console.log('\n--- REPORTE: Total de Ventas (Pedidos Entregados) ---');
    console.log(`TOTAL DE VENTAS: $${totalVentas.toLocaleString()}`);
}






