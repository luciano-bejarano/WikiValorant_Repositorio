// componentes/mapas/mapa_tarjeta.js

import { View, Text, Image, StyleSheet } from 'react-native'
import { COLORES } from '../../constantes/colores'

export default function MapaTarjeta({ mapa }) {
  return (
    <View style={estilos.tarjeta}>
      <Image source={mapa.imagen} style={estilos.imagen} />
      <View style={estilos.overlay}>
        <Text style={estilos.nombre}>{mapa.nombre}</Text>
        <Text style={estilos.region}>{mapa.region}</Text>
        <Text style={estilos.sitios}>
          Sitios: {mapa.sitiosBomba.join(' - ')}
        </Text>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  tarjeta: {
    flex: 1, margin: 6, borderRadius: 10,
    overflow: 'hidden', elevation: 4,
    height: 160,
  },
  imagen: { width: '100%', height: '100%', resizeMode: 'cover' },
  overlay: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    backgroundColor: 'rgba(0,0,0,0.65)',
    padding: 10,
  },
  nombre:  { color: COLORES.blanco, fontSize: 16, fontWeight: 'bold' },
  region:  { color: COLORES.rojo, fontSize: 12, fontWeight: '600', marginTop: 2 },
  sitios:  { color: COLORES.textoSuave, fontSize: 11, marginTop: 3 },
})
