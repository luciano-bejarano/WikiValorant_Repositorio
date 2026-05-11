// App.js — el componente principal que reúne todo 
import { StatusBar } from 'expo-status-bar' 
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native' 
import Encabezado from './componentes/inicio/Encabezado' 
import PiePagina from './componentes/inicio/Pie_Pagina' 
  
export default function App() { 
  return ( 
    <SafeAreaView style={estilos.app}> 
      <ScrollView> 
        <Encabezado /> 
      </ScrollView> 
      <StatusBar style="light" /> 
    </SafeAreaView> 
  ) 
} 
  
const estilos = StyleSheet.create({ 
  app: { 
    flex: 1, 
    backgroundColor: '#fff', 
  }, 
}) 