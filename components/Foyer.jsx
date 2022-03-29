import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Foyer = ({navigation}) => {

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
        if (station !== null){
            navigation.navigate('Default')
        }
        else {
            navigation.navigate('Landing')
        }
    })

    return (
        <ActivityIndicator />
    )
}

export default Foyer