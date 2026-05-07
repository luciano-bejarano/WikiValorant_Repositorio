// Encabezado.js — título y presentación de la app 
import { View, Text, StyleSheet, Image, Pressable } from 'react-native' 
import { useFonts } from 'expo-font';
  
export default function Encabezado() { 
  const [fontsLoaded] = useFonts({
    'Valorant_fuente': require('../../assets/Fonts/Valorant Font.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return ( 
    <View style={estilos.encabezado}> 
      <View style={estilos.encabezado_titulo}>
        <Image source={require('../../assets/valorant-logo-0.png')} style={{ width: 100, height: 100}} />
        <Text style={estilos.titulo}>WIKI FOR VALORANT</Text> 
      </View>
      <View style={estilos.iniciar_sesion}>
        <Pressable style={estilos.iniciar_sesion_boton}>
          <Text style={estilos.iniciar_sesion_texto}>Entrar</Text>
        </Pressable>
      </View>
    </View> 
  ) 
} 
  
const estilos = StyleSheet.create({ 
  encabezado: { 
    flexDirection: 'row',
    backgroundColor: '#363c4f', 
  }, 
  encabezado_titulo: { 
    padding: 20, 
    flexDirection: 'row',
    backgroundColor: '#363c4f', 
  }, 
  titulo: { 
    marginTop: 35,
    fontSize: 22, 
    fontFamily: 'Valorant_fuente',
    color: '#fff', 
  },
  iniciar_sesion: { 
    flex: 1, 
    marginRight: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iniciar_sesion_boton: { 
    backgroundColor: '#d11b1b', 
    padding: 10, 
    borderRadius: 5,
  }, 
  iniciar_sesion_texto: { 
    fontFamily: 'Valorant_fuente',
    color: '#ffffff', 
  }, 
})