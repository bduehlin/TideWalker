import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchInput from '../components/SearchInput';
import styles from '../styles/styles';
import CoordinateStationFinder from '../components/CoordinateStationFinder';
import StationFinder from '../components/StationFinder';

import Geocoder from 'react-native-geocoding'
import API_KEY from '../apikey';

const Tide = ({ navigation, route }) => {
    const { latitude, longitude, obj } = route.params
    const [fetchErr, setFetchErr] = useState("")

    const geocode = async (place) => {
        Geocoder.init(API_KEY, { language: "en" })
        try {
            const geocodeObj = await Geocoder.from(place)
            navigation.push('Tide', {
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
        <View style={[styles.parent, { justifyContent: 'space-between' }]}>
            <View style={styles.childbox}>
                {
                    route.params.longitude ? <CoordinateStationFinder latitude={latitude} longitude={longitude} /> : <StationFinder obj={obj} />
                }
            </View>
            <View style={styles.childbox}>
                <Text style={styles.text}>search for a new coast</Text>
                {
                    fetchErr ? <Text>{fetchErr}</Text> : <></>
                }
                <SearchInput submit={searchHandler} />
            </View>
        </View>
    )
}

export default Tide