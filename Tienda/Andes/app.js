const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "../products.json",
      datos: [],
      carrito: [],
      error: false,
    };
  },
  computed: {
    total() {
      return this.carrito.reduce((acc, item) => acc + item.precio, 0).toFixed(2);
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.datos = data;
        })
        .catch(error => {
          console.log("Error:" + error);
          this.error = true;
        });
    },
    addToCart(producto) {
      this.carrito.push(producto);
    },
    clearCart() {
      this.carrito = []; // Limpiar el carrito
    },
    goToCheckout() {
      alert("Ir a la página de checkout (esta función debe ser implementada)");
    }
  },
  created() {
    this.fetchData(this.url);
  }
}).mount('#app');
