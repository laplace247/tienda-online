function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega algunos productos hermosos a tu carrito!</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Carrito de Compras</h2>
      
      <div style={{ marginTop: '1rem' }}>
        {cart.map((item, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            marginBottom: '0.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img 
                src={item.imageUrl} 
                alt={item.name}
                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
              />
              <div>
                <h4>{item.name}</h4>
                <p style={{ color: '#28a745', fontWeight: 'bold' }}>${item.price}</p>
              </div>
            </div>
            
            <button 
              onClick={() => removeFromCart(item.id)}
              style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: '#dc3545', 
                color: 'white', 
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '4px',
        textAlign: 'right'
      }}>
        <h3>Total: ${total.toFixed(2)}</h3>
        <button style={{ 
          padding: '1rem 2rem', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1.1rem',
          marginTop: '1rem'
        }}>
          Proceder al Pago
        </button>
      </div>
    </div>
  );
}

export default Cart;
