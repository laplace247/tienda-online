import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Producto no encontrado</h2>
        <Link to="/" style={{ color: '#007bff' }}>Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>← Volver a la tienda</Link>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
        <div>
          <img 
            src={product.imageUrl} 
            alt={product.name}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>
        
        <div>
          <h1>{product.name}</h1>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745', margin: '1rem 0' }}>
            ${product.price}
          </p>
          <p style={{ lineHeight: '1.6', color: '#666' }}>
            {product.description}
          </p>
          
          <button 
            onClick={() => {
              addToCart(product);
              alert('Producto agregado al carrito!');
            }}
            style={{ 
              padding: '1rem 2rem', 
              backgroundColor: '#28a745', 
              color: 'white', 
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              marginTop: '1rem'
            }}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;