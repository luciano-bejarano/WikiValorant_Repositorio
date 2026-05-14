// componentes/agentes/agente_tarjeta.js
// Este componente recibe UN agente por props y lo muestra como tarjeta.
// NO sabe cuantos agentes hay ni de donde vienen los datos.
// Solo muestra lo que le llega.

import { View, Text, Image, StyleSheet } from 'react-native'
import { COLORES, COLORES_ROL } from '../../constantes/colores'

export default function AgenteTarjeta({ agente }) {
  // agente es el objeto que llega por props desde agentes.js
  // Tiene: id, nombre, rol, origen, descripcion, habilidades, imagen

  // Sacamos el color del rol. Si el rol no existe en COLORES_ROL,
  // usamos '#888888' como color por defecto.
  const colorRol = COLORES_ROL[agente.rol] || '#888888'

  return (
    <View style={estilos.tarjeta}>

      {/* Imagen del agente */}
      <Image
        source={agente.imagen}
        style={estilos.imagen}
      />

      {/* Informacion del agente */}
      <View style={estilos.info}>

        {/* Nombre */}
        <Text style={estilos.nombre}>{agente.nombre}</Text>

        {/* Badge del rol con color segun el tipo */}
        <View style={[estilos.badgeRol, { backgroundColor: colorRol + '33' }]}>
          <Text style={[estilos.textoRol, { color: colorRol }]}>
            {agente.rol}
          </Text>
        </View>

        {/* Origen */}
        <Text style={estilos.origen}>{agente.origen}</Text>

      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  tarjeta: {
    flex: 1,
    margin: 6,
    backgroundColor: COLORES.tarjeta,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  imagen: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  info: {
    padding: 10,
  },
  nombre: {
    color: COLORES.blanco,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  badgeRol: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginBottom: 6,
  },
  textoRol: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  origen: {
    color: COLORES.textoSuave,
    fontSize: 12,
  },
})
