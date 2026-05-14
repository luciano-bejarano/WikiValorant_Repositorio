// constantes/colores.js
// Paleta oficial de colores de Valorant.
// NUNCA escribas un color directamente en un componente.
// Siempre importa desde este archivo.

export const COLORES = {
  rojo:          '#FF4655',   // rojo principal de Valorant
  fondoOscuro:   '#0F1923',   // fondo de pantallas
  tarjeta:       '#1F2731',   // fondo de las tarjetas
  fondoImagen:   '#141E27',   // fondo de contenedor de imagen
  blanco:        '#FFFFFF',   // texto principal
  textoSecundario: '#C7D5E0', // texto de contenido
  textoSuave:    '#7A8B99',   // texto secundario y fechas
  borde:         '#2A3B4A',   // bordes entre elementos
}

// Color del badge segun el rol del agente
export const COLORES_ROL = {
  'Duelista':    '#FF4655',   // rojo Valorant
  'Iniciador':   '#F5A623',   // naranja
  'Centinela':   '#4CAF50',   // verde
  'Controlador': '#2196F3',   // azul
}

// Color del badge segun el tipo de arma
export const COLORES_TIPO_ARMA = {
  'Pistola':        '#9E9E9E',
  'Escopeta':       '#FF7043',
  'Subfusil':       '#42A5F5',
  'Rifle':          '#FF4655',
  'Francotirador':  '#AB47BC',
  'Ametralladora':  '#FF8F00',
  'Espada':         '#26C6DA',
}
