export const products = [
  {
    id: '1',
    name: 'Cerámica Artesanal Azul',
    price: 25.99,
    description: 'Hermosa pieza de cerámica hecha a mano, esmaltada en tonos azules vibrantes. Perfecta para decorar o como un regalo especial.',
    imageUrl: 'https://via.placeholder.com/300x200/1abc9c/ffffff?text=Artesania+1',
  },
  {
    id: '2',
    name: 'Tejido de Alpaca Andino',
    price: 79.50,
    description: 'Suave y cálido tejido de alpaca, con diseños tradicionales andinos. Ideal para los días fríos.',
    imageUrl: 'https://via.placeholder.com/300x200/3498db/ffffff?text=Artesania+2',
  },
  {
    id: '3',
    name: 'Máscara Decorativa de Madera',
    price: 45.00,
    description: 'Máscara de madera tallada y pintada a mano, representando una figura cultural. Un toque exótico para tu hogar.',
    imageUrl: 'https://via.placeholder.com/300x200/e74c3c/ffffff?text=Artesania+3',
  },
  {
    id: '4',
    name: 'Juego de Joyería de Plata',
    price: 120.00,
    description: 'Elegante juego de collar y aretes en plata de ley, con incrustaciones de piedras semipreciosas.',
    imageUrl: 'https://via.placeholder.com/300x200/9b59b6/ffffff?text=Artesania+4',
  },
];

export const getProductById = (id) => products.find(product => product.id === id);