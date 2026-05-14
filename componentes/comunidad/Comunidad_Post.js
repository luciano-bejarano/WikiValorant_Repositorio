// componentes/comunidad/comunidad_post.js

import { View, Text, StyleSheet } from 'react-native'
import { COLORES } from '../../constantes/colores'

export default function ComunidadPost({ post }) {
  return (
    <View style={estilos.tarjeta}>
      <View style={estilos.cabecera}>
        <View style={estilos.avatar}>
          <Text style={estilos.avatarLetra}>
            {post.usuario.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View>
          <Text style={estilos.usuario}>{post.usuario}</Text>
          <Text style={estilos.fecha}>{post.fecha}</Text>
        </View>
      </View>
      <Text style={estilos.contenido}>{post.contenido}</Text>
      <View style={estilos.pie}>
        <Text style={estilos.likes}>♥  {post.likes} me gusta</Text>
        <Text style={estilos.comentarios}>💬  {post.comentarios} comentarios</Text>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: COLORES.tarjeta,
    borderRadius: 10, padding: 14,
    marginHorizontal: 12, marginVertical: 6,
    elevation: 3,
  },
  cabecera:    { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar:      { width: 38, height: 38, borderRadius: 19,
                 backgroundColor: COLORES.rojo,
                 justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  avatarLetra: { color: COLORES.blanco, fontWeight: 'bold', fontSize: 16 },
  usuario:     { color: COLORES.blanco, fontWeight: 'bold', fontSize: 14 },
  fecha:       { color: COLORES.textoSuave, fontSize: 11 },
  contenido:   { color: COLORES.textoSecundario, fontSize: 14,
                 lineHeight: 20, marginBottom: 10 },
  pie:         { flexDirection: 'row', gap: 16 },
  likes:       { color: COLORES.rojo, fontSize: 13, fontWeight: '600' },
  comentarios: { color: COLORES.textoSuave, fontSize: 13 },
})
