import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<h2>Detalle del Producto</h2>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacto" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
