import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import TideData from '../components/TideData';
import styles from '../styles/styles';

const Default = ({ navigation }) => {
    const [station, setStation] = useState(null)

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
        const stationObj = await getStation()
        if (stationObj === null) {
            navigation.navigate('Home')
        }
        setStation(stationObj)
    }, [])


    return (
        <View style={styles.parent}>
            {
                station ?
                    <>
                        <Text style={styles.text}>tides for "{station.name}"</Text>
                        <TideData station={station.station} />
                    </>
                    :
                    <ActivityIndicator />
            }
        </View>
    )
}


export default Default