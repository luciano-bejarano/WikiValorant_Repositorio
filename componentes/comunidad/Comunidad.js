// componentes/comunidad/comunidad.js

import { View, FlatList, Text, StyleSheet } from 'react-native'
import ComunidadPost from './comunidad_post'
import EncabezadoComunidad from './encabezado_comunidad'
import { COLORES } from '../../constantes/colores'

// Datos de prueba de posts (en el Sprint 3 vendran de una API o base de datos)
const POSTS = [
  {
    id: '1',
    usuario: 'PlayerOne',
    fecha: 'hace 2 horas',
    contenido: 'Finalmente llegue a Immortal con Jett. La clave es practicar el dash cancel hasta que sea automatico. Les comparto mi config.',
    likes: 142,
    comentarios: 38,
  },
  {
    id: '2',
    usuario: 'ValorantPro',
    fecha: 'hace 5 horas',
    contenido: 'Tip para Ascent: si juegas de atacante, el control del mid con Sova es clave para dividir la defensa. Flecha de reconocimiento a CT desde market gana muchos rounds.',
    likes: 89,
    comentarios: 21,
  },
  {
    id: '3',
    usuario: 'SageMain',
    fecha: 'hace 1 dia',
    contenido: 'La gente subestima a Sage. Una resurrection en el momento correcto puede cambiar completamente el resultado de un round.',
    likes: 201,
    comentarios: 67,
  },
]

export default function Comunidad() {
  return (
    <View style={estilos.contenedor}>
      <FlatList
        data={POSTS}
        renderItem={({ item }) => <ComunidadPost post={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<EncabezadoComunidad />}
        contentContainerStyle={estilos.lista}
        ItemSeparatorComponent={() => (
          <View style={estilos.separador} />
        )}
      />
    </View>
  )
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: COLORES.fondoOscuro },
  lista:      { paddingBottom: 20 },
  separador:  { height: 1, backgroundColor: COLORES.borde,
                marginHorizontal: 12 },
})
