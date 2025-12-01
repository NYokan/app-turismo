import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

// Importamos las pantallas
import HomeScreen from '../screens/HomeScreen';
import DetalleScreen from '../screens/DetalleScreen';
import FavoritosScreen from '../screens/FavoritosScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExplorarStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Detalle" component={DetalleScreen} />
    </Stack.Navigator>
  );
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false, 
        
        tabBarActiveTintColor: '#1A1A1A', // Negro suave para el activo
        tabBarInactiveTintColor: '#999999', // Gris para inactivos
        
        // ESTILO DEL TEXTO
        tabBarLabelStyle: { 
          fontSize: 12, 
          fontWeight: '600',
          marginBottom: 5, // Espacio entre el texto y el borde inferior
          marginTop: -5,   // Acerca un poco el texto al icono
        },

        tabBarBackground: () => (
          <BlurView 
            tint="dark" // "light" da ese efecto blanco vidrioso
            intensity={100} // Alta intensidad para que sea legible
            style={[StyleSheet.absoluteFill, { borderRadius: 35, overflow: 'hidden' }]} 
          />
        ),

        // --- ESTILO CÁPSULA FLOTANTE PERFECTA ---
        tabBarStyle: {
          position: 'absolute',
          bottom: 30, // Flota 30px arriba del borde
          left: 30,   // Margen lateral
          right: 30,  // Margen lateral
          height: 65, // Altura suficiente para Icono + Texto
          marginHorizontal: 25,
          borderRadius: 37, // Bordes muy redondos

          
          backgroundColor: 'rgba(166, 160, 160, 0.7)', // Blanco con "un poco de oscuridad" (transparencia)
          
          borderTopWidth: 0, 
          elevation: 0, 
          
          // Padding interno para centrar todo verticalmente
          paddingBottom: 10, 
          paddingTop: 10,

          // Sombra suave para dar profundidad
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.15,
          shadowRadius: 10,
        },

        // ICONOS CENTRADOS
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Explorar') {
            iconName = focused ? 'compass' : 'compass-outline';
          } else if (route.name === 'Favoritos') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }
          // Iconos un poco más grandes
          return <Ionicons name={iconName} size={28} color={color} style={{ marginBottom: 0 }} />;
        },
      })}
    >
      <Tab.Screen name="Explorar" component={ExplorarStack} />
      <Tab.Screen name="Favoritos" component={FavoritosScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}