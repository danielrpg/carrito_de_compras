const productos = [
    {
        id: 1,
        nombre: "Laptop Gaming",
        precio: 1200.00,
        imagen: "https://via.placeholder.com/100x100/3498db/ffffff?text=💻"
    },
    {
        id: 2,
        nombre: "Smartphone",
        precio: 800.00,
        imagen: "https://via.placeholder.com/100x100/e74c3c/ffffff?text=📱"
    },
    {
        id: 3,
        nombre: "Audífonos",
        precio: 150.00,
        imagen: "https://via.placeholder.com/100x100/2ecc71/ffffff?text=🎧"
    },
    {
        id: 4,
        nombre: "Teclado Mecánico",
        precio: 120.00,
        imagen: "https://via.placeholder.com/100x100/f39c12/ffffff?text=⌨️"
    }
];

let carrrito = []; // Inicializamos el carrito como un array vacío

function mostrarProductos() { 
    const contenedorProductos = document.getElementById("productos");
    console.log("Mostrando productos:", productos);
    console.log("Carrito actual:", contenedorProductos);

    productos.forEach(producto => {
        const productoContenedor = document.createElement("div");
        productoContenedor.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" />
            <h3>${producto.nombre}</h3>
            <p>Precio: ${producto.precio.toFixed(2)} Bs.-</p>
            <button onclick="agregarAlCarrito(${producto.id})">
                Agregar al carrito
            </button>
        `;
        contenedorProductos.appendChild(productoContenedor);
    });
}

function agregarAlCarrito(id) {
    // console.log("Agregando producto al carrito:", id);

    // Buscar el producto por su ID
    const productoSeleccionado = productos.find(producto => producto.id === id);

    carrrito.push(productoSeleccionado); // Agregar el producto al carrito
    
    mostrarCarrito(); // Actualizar la vista del carrito
}

function mostrarCarrito() {
    const contenedorItems = document.getElementById("carrito-items");
    if (carrrito.length === 0) {
        contenedorItems.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        contenedorItems.innerHTML = ""; // Limpiar el contenedor antes de mostrar los items
        carrrito.forEach((producto, index) => {
            const itemContenedor = document.createElement("div");
            itemContenedor.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" />
                <h3>${producto.nombre}</h3>
                <p>Precio: ${producto.precio.toFixed(2)} Bs.-</p>
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
            `;
            contenedorItems.appendChild(itemContenedor);
        });
    }
}

mostrarProductos(); // Llamada inicial para mostrar los productos

