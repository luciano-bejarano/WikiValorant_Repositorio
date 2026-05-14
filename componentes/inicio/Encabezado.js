// Encabezado.js — título y presentación de la app 
import { View, Text, StyleSheet, Image, Pressable, Dimensions, useWindowDimensions } from 'react-native' 
import { useFonts } from 'expo-font';

// Breakpoints (puntos de quiebre) — igual que en CSS
// Móvil:     < 768px
// Tablet:    768px - 1024px
// Escritorio: > 1024px
const obtenerDispositivo = (width) => {
  if (width < 768) return 'movil';
  if (width < 1024) return 'tablet';
  return 'escritorio';
};

export default function Encabezado() {
  // useWindowDimensions se actualiza automáticamente al rotar o redimensionar
  const { width, height } = useWindowDimensions();
  const dispositivo = obtenerDispositivo(width);

  const [fontsLoaded] = useFonts({
    'Valorant_fuente': require('../../assets/Fonts/Valorant Font.ttf'),
  });

  if (!fontsLoaded) return null;

  // Valores que cambian según el dispositivo
  const tamaños = {
    movil: {
      logoSize:     width * 0.24,
      fontSize:     width * 0.060,
      fontBoton:    width * 0.050,
      paddingV:     height * 0.015,
      paddingH:     width * 0.04,
      paddingBotonV: height * 0.012,
      paddingBotonH: width * 0.04,
    },
    tablet: {
      logoSize:     width * 0.08,
      fontSize:     width * 0.032,
      fontBoton:    width * 0.025,
      paddingV:     height * 0.018,
      paddingH:     width * 0.05,
      paddingBotonV: height * 0.014,
      paddingBotonH: width * 0.03,
    },
    escritorio: {
      logoSize:     110,             // Fijo en escritorio
      fontSize:     35,
      fontBoton:    16,
      paddingV:     12,
      paddingH:     20,             // Márgenes generosos en desktop
      paddingBotonV: 12,
      paddingBotonH: 24,
    },
  };

  const t = tamaños[dispositivo];

  return ( 
    <View style={[
      estilos.encabezado,
      {
        paddingVertical:   t.paddingV,
        paddingHorizontal: t.paddingH,
        // En escritorio centramos el contenido con un ancho máximo
        ...(dispositivo === 'escritorio' && {
          maxWidth: 1280,
          alignSelf: 'center',
          width: '100%',
        }),
      }
    ]}> 

      {/* Logo + Título */}
      <View style={estilos.encabezado_titulo}>
        <Image 
          source={require('../../assets/Valorant_logo.png')} 
          style={{ width: t.logoSize, height: t.logoSize, resizeMode: 'contain' }}
        />
        {/* En móvil mostramos texto corto, en desktop el título completo */}
        <Text style={[estilos.titulo, { fontSize: t.fontSize }]}>
          {dispositivo === 'movil' ? 'WIKI VALORANT' : 'WIKI FOR VALORANT'}
        </Text>
      </View>

      {/* Botón */}
      <View style={estilos.iniciar_sesion}>
        <Pressable style={[
          estilos.iniciar_sesion_boton,
          {
            paddingVertical:   t.paddingBotonV,
            paddingHorizontal: t.paddingBotonH,
          }
        ]}>
          <Text style={[estilos.iniciar_sesion_texto, { fontSize: t.fontBoton }]}>
            {dispositivo === 'movil' ? 'Entrar' : 'Entrar'}
          </Text>
        </Pressable>
      </View>

    </View> 
  ) 
} 

const estilos = StyleSheet.create({ 
  encabezado: { 
    flexDirection: 'row',
    backgroundColor: '#242937',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Sombra para que se vea separado del contenido
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  }, 
  encabezado_titulo: { 
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    flex: 1,
  }, 
  titulo: { 
    fontFamily: 'Valorant_fuente',
    color: '#fff',
    flexShrink: 1,
  },
  iniciar_sesion: { 
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iniciar_sesion_boton: { 
    backgroundColor: '#d11b1b',
    borderRadius: 5,
  }, 
  iniciar_sesion_texto: { 
    fontFamily: 'Valorant_fuente',
    color: '#ffffff',
    fontWeight: 'bold',
  }, 
});