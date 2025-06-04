import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias por contactarnos, ${formData.name}! Te responderemos pronto.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contáctanos</h2>
      <p>¿Tienes alguna pregunta sobre nuestras artesanías? ¡Nos encantaría escucharte!</p>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Mensaje:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
        </div>
        
        <button 
          type="submit"
          style={{ 
            padding: '1rem 2rem', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            width: '100%'
          }}
        >
          Enviar Mensaje
        </button>
      </form>
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h3>Información de Contacto</h3>
        <p><strong>Dirección:</strong> Calle de las Artesanías 123, Ciudad</p>
        <p><strong>Teléfono:</strong> +1 (555) 123-4567</p>
        <p><strong>Email:</strong> info@artesanias.com</p>
        <p><strong>Horarios:</strong> Lunes a Viernes 9:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
}

export default ContactForm;
