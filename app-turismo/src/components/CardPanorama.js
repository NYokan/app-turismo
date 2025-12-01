import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardPanorama(props) {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: props.imagenUrl }} 
        style={styles.image} 
        resizeMode="cover"
      />
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.titulo}</Text>
        <Text style={styles.ubicacion}>{props.ubicacion}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 20, 
    width: '100%',
    
    // Sombras
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    padding: 12, 
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  ubicacion: {
    fontSize: 13,
    color: '#6F4E37',
    marginTop: 4,
  }
});