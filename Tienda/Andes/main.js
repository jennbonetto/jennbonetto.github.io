document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
});

async function cargarProductos() {
    const response = await fetch('./productos.json');
    const productos = await response.json();
    mostrarProductos(productos);
}

function mostrarProductos(productos) {
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = '';
    productos.forEach(producto => {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <article>
                <img class="imagen-ropa" src="${producto.imagen}">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <p>$${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            </article>
        `;
        contenedor.appendChild(item);
    });
}

async function buscarProductos() {
    const query = document.getElementById('search').value.toLowerCase();
    const response = await fetch('./productos.json');
    const productos = await response.json();
    const resultados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(query) || 
        producto.descripcion.toLowerCase().includes(query)
    );
    mostrarProductos(resultados);
}

function agregarAlCarrito(productoId) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(productoId);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto agregado al carrito');
}
function registrarUsuario(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({ username, password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuario registrado exitosamente');
}

function iniciarSesion(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.username === username && u.password === password);

    if (usuario) {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('usuarioActual', JSON.stringify(usuario));
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}
