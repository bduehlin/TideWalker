import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-paper';
import SearchInput from '../components/SearchInput';
import styles from '../styles/styles';
import * as Location from 'expo-location'


import Geocoder from 'react-native-geocoding'
import API_KEY from '../apikey';

const Landing = ({ navigation }) => {
    const [errorMsg, setErrorMsg] = useState("")
    const [fetchErr, setFetchErr] = useState("")

    const pressHandler = async () => {
        // code to grab location, expo-location
        const location = await (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            return location
        })();
        navigation.navigate('Tide', {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        })
    }

    const geocode = async (place) => {
        Geocoder.init(API_KEY, { language: "en" })
        try {
            const geocodeObj = await Geocoder.from(place)
            navigation.navigate('Tide', {
                obj: geocodeObj.results[0]
            })
            if (fetchErr !== "") {
                setFetchErr("")
            }
        } catch (e) {
            console.log(e)
            setFetchErr("no results were found for this place")
        }
    }

    const searchHandler = (place) => {
        geocode(place)
    }

    return (
        <View style={[styles.parent, { justifyContent: "space-between" }]}>
            <View style={styles.topdiv}>
                <Text style={styles.title}>Welcome to TideWalker</Text>
                <Text style={styles.text}>share your device location to check the oceans near you</Text>
                <Button mode='contained' style={styles.button} icon='map-marker-question' onPress={pressHandler} color='#ff4d00'>share your location</Button>
                {
                    errorMsg ? <Text>{errorMsg}</Text> : <></>
                }
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Text style={styles.text}>if you would rather search a location:</Text>
                {
                    fetchErr ? <Text>{fetchErr}</Text> : <></>
                }
                <SearchInput submit={searchHandler} />
            </View>
        </View>
    )
}


export default Landing