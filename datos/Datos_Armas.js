// datos/armas.js
export const ARMAS = [
  {
    id: '1',
    nombre: 'Vandal',
    tipo: 'Rifle',
    precio: 2900,
    dano: { cabeza: 160, cuerpo: 40, piernas: 34 },
    cadencia: 9.75,
    descripcion: 'Rifle de asalto de alta potencia. Un disparo a la cabeza es letal a cualquier distancia.',
    imagen: require('../assets/placeholder.png'),
  },
  {
    id: '2',
    nombre: 'Phantom',
    tipo: 'Rifle',
    precio: 2900,
    dano: { cabeza: 156, cuerpo: 39, piernas: 33 },
    cadencia: 11,
    descripcion: 'Rifle automatico silenciado. Ideal para combate en rango medio',
    imagen: require('../assets/placeholder.png'),
  },
  {
    id: '3',
    nombre: 'Operator',
    tipo: 'Francotirador',
    precio: 4700,
    dano: { cabeza: 255, cuerpo: 150, piernas: 127 },
    cadencia: 0.75,
    descripcion: 'El francotirador más poderoso del juego. Un disparo al cuerpo es letal.',
    imagen: require('../assets/placeholder.png'),
  },
]
