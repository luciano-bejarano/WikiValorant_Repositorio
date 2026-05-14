// componentes/mapas/mapas.js

import { View, FlatList, Text, StyleSheet } from 'react-native'
import MapaTarjeta from './mapa_tarjeta'
import EncabezadoMapa from './encabezado_mapa'
import { MAPAS } from '../../datos/mapas'
import { COLORES } from '../../constantes/colores'

export default function Mapas() {
  return (
    <View style={estilos.contenedor}>
      <FlatList
        data={MAPAS}
        renderItem={({ item }) => <MapaTarjeta mapa={item} />}
        keyExtractor={item => item.id}
        // Sin numColumns: una sola columna, tarjetas mas grandes
        ListHeaderComponent={<EncabezadoMapa />}
        contentContainerStyle={estilos.lista}
      />
    </View>
  )
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: COLORES.fondoOscuro },
  lista:      { paddingHorizontal: 12, paddingBottom: 20 },
})
