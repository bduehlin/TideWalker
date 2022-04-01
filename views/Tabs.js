import React, {useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Default from '../tabs/Default';
import Search from '../tabs/Search';
import About from '../tabs/About';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Tab = createBottomTabNavigator();

export default function Tabs({navigation}) {

    const getStation = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('default')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
            console.log("local storage error", e)
        }
    }

    useEffect(async () => {
        const station = await getStation()
        if (station === null){
            navigation.navigate('Landing')
        }
    })


    return (        
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = 'home';
                } else if (route.name === 'Search') {
                    iconName = 'search';
                } else if (route.name === 'About') {
                    iconName = 'waves'
                }
                // You can return any component that you like here!
                return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarStyle: {
                // position: 'absolute',
                backgroundColor: '#0048ff',
                paddingTop: 10,
                paddingBottom: 10,
                height: 70,
            },
            tabBarActiveTintColor: '#ff4d00',
            tabBarInactiveTintColor: '#ffffff',
            tabBarLabelStyle: {
                fontSize: 20,
            }
        })
        } >
            <Tab.Screen name="Home" component={Default} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="About" component={About} />
        </ Tab.Navigator>
    );
}