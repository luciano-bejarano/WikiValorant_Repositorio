// componentes/inicio/agentes_populares.js

import { View, FlatList, Text, Image, StyleSheet } from 'react-native'
import { AGENTES } from '../../datos/agentes'
import { COLORES, COLORES_ROL } from '../../constantes/colores'

// Tarjeta pequena solo para la lista horizontal
function TarjetaAgentePequena({ agente }) {
  const colorRol = COLORES_ROL[agente.rol] || '#888'
  return (
    <View style={estilos.tarjeta}>
      <Image source={agente.imagen} style={estilos.imagen} />
      <Text style={estilos.nombre}>{agente.nombre}</Text>
      <Text style={[estilos.rol, { color: colorRol }]}>{agente.rol}</Text>
    </View>
  )
}

export default function AgentesPopulares() {
  return (
    <View style={estilos.seccion}>
      <Text style={estilos.titulo}>Agentes Populares</Text>
      <FlatList
        data={AGENTES}
        renderItem={({ item }) => <TarjetaAgentePequena agente={item} />}
        keyExtractor={item => item.id}
        horizontal={true}           // <-- esto hace la lista horizontal
        showsHorizontalScrollIndicator={false}  // oculta la barra de scroll
        contentContainerStyle={estilos.lista}
      />
    </View>
  )
}

const estilos = StyleSheet.create({
  seccion: { marginVertical: 16 },
  titulo:  { color: COLORES.blanco, fontSize: 18, fontWeight: 'bold',
             paddingHorizontal: 16, marginBottom: 12 },
  lista:   { paddingHorizontal: 12, gap: 10 },
  tarjeta: {
    width: 100,
    backgroundColor: COLORES.tarjeta,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  imagen:  { width: 100, height: 100, resizeMode: 'cover' },
  nombre:  { color: COLORES.blanco, fontSize: 13, fontWeight: 'bold',
             marginTop: 6, marginBottom: 2 },
  rol:     { fontSize: 11, fontWeight: '600', marginBottom: 8 },
})
