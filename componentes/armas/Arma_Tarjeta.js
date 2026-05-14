// componentes/armas/arma_tarjeta.js

import { View, Text, Image, StyleSheet } from 'react-native'
import { COLORES, COLORES_TIPO_ARMA } from '../../constantes/colores'

export default function ArmaTarjeta({ arma }) {
  const colorTipo = COLORES_TIPO_ARMA[arma.tipo] || '#888888'
  return (
    <View style={estilos.tarjeta}>
      <Image source={arma.imagen} style={estilos.imagen} />
      <View style={estilos.info}>
        <Text style={estilos.nombre}>{arma.nombre}</Text>
        <View style={[estilos.badge, { backgroundColor: colorTipo + '33' }]}>
          <Text style={[estilos.textoBadge, { color: colorTipo }]}>{arma.tipo}</Text>
        </View>
        <Text style={estilos.precio}>${arma.precio.toLocaleString()}</Text>
        <Text style={estilos.dano}>
          Cabeza: {arma.dano.cabeza}  |  Cuerpo: {arma.dano.cuerpo}
        </Text>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  tarjeta: {
    flex: 1, margin: 6, backgroundColor: COLORES.tarjeta,
    borderRadius: 10, overflow: 'hidden', elevation: 4,
  },
  imagen:     { width: '100%', height: 100, resizeMode: 'contain',
                backgroundColor: COLORES.fondoImagen },
  info:       { padding: 10 },
  nombre:     { color: COLORES.blanco, fontSize: 15, fontWeight: 'bold', marginBottom: 6 },
  badge:      { alignSelf: 'flex-start', paddingHorizontal: 8,
                paddingVertical: 3, borderRadius: 4, marginBottom: 6 },
  textoBadge: { fontSize: 11, fontWeight: 'bold' },
  precio:     { color: COLORES.rojo, fontSize: 14, fontWeight: 'bold', marginBottom: 4 },
  dano:       { color: COLORES.textoSuave, fontSize: 11 },
})
