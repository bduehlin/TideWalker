import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';

import SearchInput from '../components/SearchInput';
import StationFinder from '../components/StationFinder';

import styles from '../styles/styles';

import Geocoder from 'react-native-geocoding'
import API_KEY from '../apikey';


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

    return (
        <View style={styles.parent}>
            {
                mapsObj.formatted_address ? 
                <>
                    <StationFinder obj={mapsObj} />
                    <Button mode='contained' style={styles.button} icon='map-marker-question' onPress={ pressHandler } color='#ff4d00'>search again</Button>
                </>
                :
                <>
                    <Text>measure the ocean</Text>
                    <SearchInput submit={geocode} />
                    {
                        fetchErr ? <Text>{fetchErr}</Text> : <></>
                    }
                </>
            }
        </View>
    )
}


export default Search