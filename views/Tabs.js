// import { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Default from '../tabs/Default';
import Search from '../tabs/Search';
import About from '../tabs/About';


const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={{ 
            headerShown: false, 
            tabBarStyle: {
                // position: 'absolute',
                backgroundColor: '#a7a7a7',
            },
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#000000'
            }}>
            <Tab.Screen name="Home" component={Default} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    );
}