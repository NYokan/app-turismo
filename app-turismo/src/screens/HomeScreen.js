import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import CardPanorama from '../components/CardPanorama'; 
import { StyleSheet, Text, View, FlatList, TextInput, Platform, TouchableOpacity } from 'react-native';

const MIS_PANORAMAS = [
  { 
    id: '1', 
    titulo: "Plaza de Armas", 
    ubicacion: "Centro de Talagante", 
    imagenUrl: "https://picsum.photos/id/10/800/600",
    latitude: -33.6644, 
    longitude: -70.9283 
  },
  { 
    id: '2', 
    titulo: "Río Mapocho (Zona Picnic)", 
    ubicacion: "Sector El Monte / Talagante", 
    imagenUrl: "https://picsum.photos/id/15/800/600",
    latitude: -33.6500, 
    longitude: -70.9500 
  },
  { 
    id: '3', 
    titulo: "Viña Undurraga", 
    ubicacion: "Camino a Melipilla", 
    imagenUrl: "https://picsum.photos/id/28/800/600",
    latitude: -33.6828, 
    longitude: -70.9083 
  },
  { 
    id: '4', 
    titulo: "Parque Octavio Leiva", 
    ubicacion: "Av. Bernardo O'Higgins", 
    imagenUrl: "https://picsum.photos/id/11/800/600",
    latitude: -33.6595, 
    longitude: -70.9298 
  },
  { 
    id: '5', 
    titulo: "Santuario de la Naturaleza", 
    ubicacion: "Sector Lonquén", 
    imagenUrl: "https://picsum.photos/id/16/800/600",
    latitude: -33.7000, 
    longitude: -70.8500 
  }
];

export default function HomeScreen({ navigation }) { 
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const panoramasFiltrados = MIS_PANORAMAS.filter((item) => {
    const textoIngresado = textoBusqueda.toLowerCase();
    const tituloPanorama = item.titulo.toLowerCase();
    return tituloPanorama.includes(textoIngresado);
  });

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Explora Talagante</Text>
        <Text style={styles.subtitulo}>Descubre lo mejor de tu zona</Text>
        
        <View style={styles.buscadorContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.lupaIcono} />
          <TextInput 
            style={styles.inputTexto}
            placeholder="Buscar panorama..."
            placeholderTextColor="#999"
            value={textoBusqueda}
            onChangeText={setTextoBusqueda}
          />
        </View>
      </View>

      <FlatList
        data={panoramasFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <TouchableOpacity 
         activeOpacity={0.8}
         onPress={() => navigation.navigate('Detalle', { item: item })}
        >
        <CardPanorama 
         titulo={item.titulo}
         ubicacion={item.ubicacion}
         imagenUrl={item.imagenUrl}
        />
        </TouchableOpacity>
)}
        contentContainerStyle={styles.listaContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    marginTop: 10, 
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28, 
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitulo: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
    marginBottom: 20, 
  },
  buscadorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  lupaIcono: {
    marginRight: 10,
  },
  inputTexto: {
    flex: 1,
    fontSize: 16,
    color: '#333'
  },
  listaContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  }
});