// componentes/armas/armas.js

import { View, FlatList, Text, StyleSheet } from 'react-native'
import ArmaTarjeta from './arma_tarjeta'
import EncabezadoArmas from './encabezado_armas'
import { ARMAS } from '../../datos/armas'
import { COLORES } from '../../constantes/colores'

export default function Armas() {
  return (
    <View style={estilos.contenedor}>
      <FlatList
        data={ARMAS}
        renderItem={({ item }) => <ArmaTarjeta arma={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        ListHeaderComponent={<EncabezadoArmas />}
        contentContainerStyle={estilos.lista}
        ListEmptyComponent={
          <Text style={estilos.textoVacio}>No hay armas disponibles.</Text>
        }
      />
    </View>
  )
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: COLORES.fondoOscuro },
  lista:      { paddingHorizontal: 6, paddingBottom: 20 },
  textoVacio: { color: COLORES.textoSuave, textAlign: 'center',
                marginTop: 40, fontSize: 15 },
})
