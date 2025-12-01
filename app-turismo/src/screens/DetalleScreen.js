import React from 'react';
// PASO A: Importamos Linking y Platform
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetalleScreen({ route, navigation }) {
  const { item } = route.params; 

  // PASO B: La función lógica (va antes del return)
  const abrirMapa = () => {
    const lat = item.latitude;
    const lng = item.longitude;
    const label = item.titulo;

    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lng}`;
    
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imagenUrl }} style={styles.imagenGigante} resizeMode="cover" />

      <TouchableOpacity style={styles.botonAtras} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          
          <Text style={styles.titulo}>{item.titulo}</Text>
          
          <View style={styles.ubicacionContainer}>
            <Ionicons name="location-sharp" size={20} color="#6F4E37" />
            <Text style={styles.ubicacion}>{item.ubicacion}</Text>
          </View>

          <Text style={styles.descripcion}>
            Aquí iría la descripción detallada de este panorama...
          </Text>

          {/* PASO C: Conectamos el botón aquí */}
          <TouchableOpacity style={styles.botonIr} onPress={abrirMapa}>
            <Text style={styles.textoBoton}>Cómo llegar</Text>
            <Ionicons name="map-outline" size={20} color="#fff" style={{ marginLeft: 8 }} />
          </TouchableOpacity>

        </ScrollView>
      </View>
    </View>
  );
}

// ... (Los estilos styles = ... siguen igual abajo)
const styles = StyleSheet.create({
  // ... tus estilos existentes ...
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagenGigante: {
    width: '100%',
    height: 350, 
  },
  botonAtras: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 10,
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  ubicacionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ubicacion: {
    fontSize: 16,
    color: '#666',
    marginLeft: 5,
  },
  descripcion: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 30,
  },
  botonIr: {
    backgroundColor: '#1A1A1A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 40,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});