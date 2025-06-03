import React from 'react';

function ProductList() {
  // Simulación de productos
  const products = [
    { id: 1, name: 'Vaso de Cerámica', price: 120 },
    { id: 2, name: 'Bolso de Tela', price: 250 },
    { id: 3, name: 'Collar Artesanal', price: 80 }
  ];

  return (
    <section className="product-list">
      <h2>Productos Destacados</h2>
      <div className="products">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;