import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchInput from '../components/SearchInput';

import styles from '../styles/styles';

import Geocoder from 'react-native-geocoding'

const Search = ({ navigation }) => {
    const [mapsObj, setMapsObj] = useState({})
    const [fetchErr, setFetchErr] = useState("")


    const geocode = async (place) => {
        Geocoder.init("AIzaSyDgHVXawbgPBaZW7Q6IOL9tGAKuv49RKm8", { language: "en" })
        try {
            console.log(typeof(place))
            const geocodeObj = await Geocoder.from(place)
            console.log(geocodeObj)
            setMapsObj(geocodeObj.results[0])
            if(fetchErr !== ""){
                setFetchErr("")
            }
        } catch (e) {
            console.log(e)
            setFetchErr("no results were found for this place")
        }
    }

    return (
        <View style={styles.parent}>
            {
                mapsObj.formatted_address ? <Text>{JSON.stringify(mapsObj.formatted_address)}</Text> : <></>
            }
            <Text>measure the ocean</Text>
            <SearchInput submit={geocode} />
            {
                fetchErr ? <Text>{fetchErr}</Text> : <></>
            }
        </View>
    )
}


export default Search