import { Link } from 'react-router-dom';
import { products } from '../data/products';

function ProductList({ addToCart }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Nuestro Catalogo</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        marginTop: '1rem'
      }}>
        {products.map(product => (
          <div key={product.id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            padding: '1rem',
            textAlign: 'center'
          }}>
            <img 
              src={product.imageUrl} 
              alt={product.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <h3>{product.name}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
              {product.description.substring(0, 100)}...
            </p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#28a745' }}>
              ${product.price}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <Link 
                to={`/product/${product.id}`}
                style={{ 
                  padding: '0.5rem 1rem', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  textDecoration: 'none',
                  borderRadius: '4px'
                }}
              >
                Ver Detalles
              </Link>
              <button 
                onClick={() => addToCart(product)}
                style={{ 
                  padding: '0.5rem 1rem', 
                  backgroundColor: '#28a745', 
                  color: 'white', 
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
