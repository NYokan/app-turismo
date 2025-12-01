import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Importamos nuestra nueva navegación modularizada
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}