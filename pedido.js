// Crear un pedido
let Pedidos = [
  {
    idPedido: "P1",
    nombreCliente: "anderson",
    items: [
      { nombre: "Hamburguesa clásica", precio: 50000 },
      { nombre: "Papas fritas", precio: 5000 },
      { nombre: "Refresco grande", precio: 15000 }
    ]
  },
  {
    idPedido: "P2",
    nombreCliente: "camilo",
    items: [
      { nombre: "Nuggets de pollo", precio: 5000 },
      { nombre: "Papas fritas", precio: 5000 },
      { nombre: "Refresco grande", precio: 15000 }
    ]
  },
  {
    idPedido: "P3",
    nombreCliente: "laura",
    items: [
      { nombre: "Pizza personal", precio: 45000 },
      { nombre: "Papas fritas", precio: 5000 },
      { nombre: "Refresco grande", precio: 15000 }
    ]
  }
]

function listarProductos() {
    Pedidos.forEach(pedido => {
  console.log(`
    \nID: ${pedido.idPedido}\nNombre: ${pedido.nombreCliente}\nitems:\n${pedido.items.map(item => `${item.nombre}: $${item.precio}`).join('')}
    `);
  });
}
 
listarProductos();