// componentes/agentes/agentes.js

import { View, FlatList, StyleSheet } from 'react-native'
import AgenteTarjeta from './agente_tarjeta'
import EncabezadoAgentes from './encabezado_agentes'
import { AGENTES } from '../../datos/agentes'
import { COLORES } from '../../constantes/colores'

export default function Agentes() {
  return (
    <View style={estilos.contenedor}>

      {/* FlatList muestra la lista de agentes */}
      <FlatList
        // data: el array de agentes que importamos de datos/agentes.js
        data={AGENTES}

        // renderItem: función que se llama por cada agente del array.
        // 'item' es el agente actual. Lo pasamos como prop a AgenteTarjeta.
        renderItem={({ item }) => (
          <AgenteTarjeta agente={item} />
        )}

        // keyExtractor: devuelve el ID unico de cada agente como string.
        // React lo usa internamente para identificar cada elemento.
        keyExtractor={item => item.id}

        // numColumns: muestra en cuadricula de 2 columnas
        numColumns={2}

        // ListHeaderComponent: el encabezado aparece ANTES de la lista
        ListHeaderComponent={<EncabezadoAgentes />}

        // contentContainerStyle: padding al contenido de la lista
        contentContainerStyle={estilos.lista}

        // ListEmptyComponent: mensaje si no hay agentes
        ListEmptyComponent={
          <Text style={estilos.textoVacio}>
            No hay agentes disponibles.
          </Text>
        }
      />
    </View>
  )
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: COLORES.fondoOscuro,
  },
  lista: {
    paddingHorizontal: 6,
    paddingBottom: 20,
  },
  textoVacio: {
    color: COLORES.textoSuave,
    textAlign: 'center',
    marginTop: 40,
    fontSize: 15,
  },
})
