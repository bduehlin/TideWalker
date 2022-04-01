import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';

import SearchInput from '../components/SearchInput';
import StationFinder from '../components/StationFinder';
import CoordinateStationFinder from '../components/CoordinateStationFinder';

import styles from '../styles/styles';

import Geocoder from 'react-native-geocoding'
import API_KEY from '../apikey';

import * as Location from 'expo-location'



const Search = ({ navigation }) => {
    const [mapsObj, setMapsObj] = useState({})
    const [fetchErr, setFetchErr] = useState("")


    const geocode = async (place) => {
        Geocoder.init(API_KEY, { language: "en" })
        try {
            const geocodeObj = await Geocoder.from(place)
            setMapsObj(geocodeObj.results[0])
            if (fetchErr !== "") {
                setFetchErr("")
            }
        } catch (e) {
            console.log(e)
            setFetchErr("no results were found for this place")
        }
    }

    const pressHandler = () => {
        setMapsObj({})
        setFetchErr("")
    }

    const hereHandler = async () => {
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

        setMapsObj({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        })
    }

    if (mapsObj.formatted_address) {
        return (
            <View style={styles.parent}>
                <StationFinder obj={mapsObj} />
                <Button mode='contained' style={styles.button} onPress={pressHandler} color='#ff4d00'>search again</Button>
            </View>
        )
    }

    else if (mapsObj.latitude) {
        return (
            <View style={styles.parent}>
                <CoordinateStationFinder latitude={mapsObj.latitude} longitude={mapsObj.longitude} />
                <Button mode='contained' style={styles.button} onPress={pressHandler} color='#ff4d00'>search again</Button>
            </View>
        )
    }

    return (
        <View style={styles.parent}>
            <View style={{ width: '100%', padding: 15, backgroundColor: '#ffaa85', marginBottom: 20}}>
                <Text style={styles.text}>measure the ocean</Text>
                <SearchInput submit={geocode} />
                {
                    fetchErr ? <Text>{fetchErr}</Text> : <></>
                }
            </View>
            <Text style={styles.text}>or</Text>
            <Button mode='contained' style={[styles.button, { width: 240 }]} icon='map-marker-question' onPress={hereHandler} color='#ff4d00'>scry at my location</Button>
        </View>
    )
}


export default Search