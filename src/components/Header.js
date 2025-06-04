import { Link } from 'react-router-dom';

function Header({ cartCount }) {
    return (
        <header style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
                    <h1>Tienda de Artesanías</h1>
                </Link>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Productos</Link>
                    <Link to="/cart" style={{ textDecoration: 'none', color: '#007bff' }}>
                        Carrito ({cartCount})
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none', color: '#007bff' }}>Contacto</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
