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










const pedidos = [
    { estado: 'pendiente', total: 50 },
    { estado: 'preparando', total: 30 },
    { estado: 'entregado', total: 75 },
    { estado: 'pendiente', total: 25 },
    { estado: 'entregado', total: 90 }
];

/**
 * Muestra un reporte del conteo de pedidos por estado.
 */
function mostrarConteoPedidosBasico() {
    // Definimos el objeto para guardar los conteos
    let conteo = {
        pendiente: 0,
        preparando: 0,
        entregado: 0
    };

    // Recorremos cada pedido y contamos según su estado
    pedidos.forEach(p => {
        if (p.estado in conteo) {
            conteo[p.estado]++;
        }
    });

    console.log('\n--- REPORTE (básico): Conteo de Pedidos ---');
    console.log(`Pendientes: ${conteo.pendiente}`);
    console.log(`Preparando: ${conteo.preparando}`);
    console.log(`Entregados: ${conteo.entregado}`);
}

/**
 * Calcula y muestra el total de ventas (suma de pedidos entregados).
 */
function calcularTotalVentasBasico() {
    let totalVentas = 0;

    // Recorremos cada pedido y sumamos si está entregado
    pedidos.forEach(p => {
        if (p.estado === 'entregado') {
            totalVentas += p.total;
        }
    });

    console.log('\n--- REPORTE (básico): Total de Ventas ---');
    console.log(`TOTAL DE VENTAS: $${totalVentas.toFixed(2)}`);
}

// Llamamos a las funciones // Variable global que representa una lista de pedidos.para ver los resultados
mostrarConteoPedidosBasico();
calcularTotalVentasBasico();






