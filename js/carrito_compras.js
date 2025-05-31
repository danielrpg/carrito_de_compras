const productos = [
    {
        id: 1,
        nombre: "Laptop Gaming",
        precio: 12000.00,
        imagen: "https://i.pcmag.com/imagery/reviews/00ujXpkUDw1FIczR1gVekQk-1.fit_lim.size_919x518.v1722353639.jpg"
    },
    {
        id: 2,
        nombre: "Smartphone",
        precio: 800.00,
        imagen: "https://i5.walmartimages.com/seo/HOMBOTI-Smart-Phone-Clearance-Unlocked-Phone-Unlocked-Android-Smartphone-8GB-ROM-1GB-RAM-Android-Phone-5IN-HD-Cell-Phone-2MP-Rear-Camera-System-1500m_1d21fd56-c4b9-4963-88ac-a4171a8bcbef.ca53ba6a506603dadc861a48badbd9e1.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    },
    {
        id: 3,
        nombre: "Audífonos",
        precio: 150.00,
        imagen: "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_Primary_image?$categorypdpnav$&fmt=png-alpha"
    },
    {
        id: 4,
        nombre: "Teclado Mecánico",
        precio: 120.00,
        imagen: "https://cdn2.unrealengine.com/mechanical-keyboard-diagonal-4080x2295-d50ff434f19c.jpg"
    },
    {
        id: 5,
        nombre: "Mouse Inalámbrico",
        precio: 50.00,
        imagen: "https://sologamerbolivia.com/cdn/shop/files/cobra-pro.jpg?v=1715270224"
    },
    {
        id: 6,
        nombre: "Monitor 4K",
        precio: 300.00,
        imagen: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/aw-series/aw3225qf/pdp/monitor-alienware-aw3225qf-hero.psd?fmt=jpg&wid=756&hei=525"
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
                Seleccionar
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
        contenedorItems.innerHTML = `<p id="carrito-vacio">El carrito está vacío</p>`;
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

    actualizarTotal(); // Actualizar el total del carrito
}

function actualizarTotal() {
    const total = carrrito.reduce((sum, producto) => {
        return sum + producto.precio
    }, 0);

    const totalContenedor = document.getElementById("total");
    totalContenedor.textContent = `Total: ${total.toFixed(2)} Bs.-`;
}

function eliminarDelCarrito(index) {
    // console.log("Eliminando producto del carrito:", index);
    
    carrrito.splice(index, 1); // Eliminar el producto del carrito
    mostrarCarrito(); // Actualizar la vista del carrito
}

mostrarProductos(); // Llamada inicial para mostrar los productos

