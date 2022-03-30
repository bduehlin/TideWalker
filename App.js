import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './views/Landing';
import Tide from './views/Tide';
import DefaultForm from './views/DefaultForm'
import Tabs from './views/Tabs';
import Foyer from './views/Foyer';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Foyer" component={ Foyer } />
        <Stack.Screen name="Tabs" component={ Tabs } />
        {/* First visit pages */}
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Tide" component={Tide} />
        <Stack.Screen name="DefaultForm" component={DefaultForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
