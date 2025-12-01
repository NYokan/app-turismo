// src/screens/DetalleScreen.js
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetalleScreen({ route, navigation }) {
  // 1. RECIBIR LOS DATOS (EL PAQUETE)
  // "route.params" contiene lo que enviamos desde la Home
  const { item } = route.params; 

  return (
    <View style={styles.container}>
      {/* IMAGEN DE FONDO (Ocupa la mitad de arriba) */}
      <Image source={{ uri: item.imagenUrl }} style={styles.imagenGigante} resizeMode="cover" />

      {/* BOTÓN ATRÁS FLOTANTE */}
      <TouchableOpacity style={styles.botonAtras} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      {/* CONTENEDOR DE INFO (Blanco, esquinas redondeadas) */}
      <View style={styles.infoContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          
          <Text style={styles.titulo}>{item.titulo}</Text>
          
          <View style={styles.ubicacionContainer}>
            <Ionicons name="location-sharp" size={20} color="#6F4E37" />
            <Text style={styles.ubicacion}>{item.ubicacion}</Text>
          </View>

          {/* Descripción de relleno (Lorem Ipsum) */}
          <Text style={styles.descripcion}>
            Aquí iría la descripción detallada de este panorama. 
            Imagina un texto que cuenta la historia del lugar, los horarios de atención 
            y por qué es un imperdible de Talagante.
            {'\n'}{'\n'}
            Es un lugar perfecto para visitar en familia o con amigos y disfrutar de la naturaleza.
          </Text>

          {/* Botón de Acción */}
          <TouchableOpacity style={styles.botonIr}>
            <Text style={styles.textoBoton}>Cómo llegar</Text>
            <Ionicons name="map-outline" size={20} color="#fff" style={{ marginLeft: 8 }} />
          </TouchableOpacity>

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagenGigante: {
    width: '100%',
    height: 350, // Altura de la imagen principal
  },
  botonAtras: {
    position: 'absolute', // Flota encima de la imagen
    top: 50,
    left: 20,
    backgroundColor: 'rgba(255,255,255,0.8)', // Blanco semitransparente
    padding: 10,
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -40, // TRUCO: Sube el blanco para tapar un poco la foto
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
    lineHeight: 24, // Espacio entre líneas para leer mejor
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