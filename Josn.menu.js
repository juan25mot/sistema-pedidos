let MENU = [
    {IDproduct: "1", Nombre: "Hamburguesa clásica", Precio: 50000, Categoria: "Hamburgesas"},
    {IDproduct: "2", Nombre: "Hamburguesa con queso", Precio: 60000, Categoria: "Hamburgesas"},
    {IDproduct: "3", Nombre: "Papas fritas", Precio: 5000, Categoria: "Acompañamientos"}, 
    {IDproduct: "4", Nombre: "Nuggets de pollo", Precio: 5000, Categoria: "Acompañamientos"},
    {IDproduct: "5", Nombre: "Pizza personal", Precio: 45000, Categoria: "Pizzas"},
    {IDproduct: "6", Nombre: "Hot dog", Precio: 20000, Categoria: "Snacks"},   
    {IDproduct: "7", Nombre: "Alitas de pollo", Precio: 25000, Categoria: "Acompañamientos"},
    {IDproduct: "8", Nombre: "Aros de cebolla", Precio: 10000, Categoria: "Acompañamientos"},
    {IDproduct: "9", Nombre: "Tacos", Precio: 10000, Categoria: "Snacks"},
    {IDproduct: "10", Nombre: "Burritos", Precio: 10000, Categoria: "Snacks"},
    {IDproduct: "11", Nombre: "Refresco grande", Precio: 15000, Categoria: "Bebidas"},
    {IDproduct: "12", Nombre: "Malteada de vainilla", Precio: 18000, Categoria: "Bebidas"} 
]

//listar productos
function listarProductos() {
    MENU.forEach(producto => {
        console.log(`\nIDproduct: ${producto.IDproduct}\nNombre: ${producto.Nombre}\nPrecio: ${producto.Precio}\nCategoria: ${producto.Categoria}`)
    });
}
listarProductos();


function buscarProducto(terminoBusqueda) {
    const terminoLower = terminoBusqueda.toLowerCase();
    const resultados = MENU.filter(producto =>
        producto.Nombre.toLowerCase().includes(terminoLower),
        producto.Categoria.toLowerCase().includes(terminoLower)
    );
    if (resultados.length === 0) {
        console.log('No se encontraron productos.');
    } else {
        resultados.forEach(producto => {
            console.log(`\nIDproduct: ${producto.IDproduct}\nNombre: ${producto.Nombre}\nPrecio: ${producto.Precio}\nCategoria: ${producto.Categoria}`);
        });
    }
}
