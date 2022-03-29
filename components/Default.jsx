import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import TideData from './TideData';

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

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingTop: 50,
    },
    text: {
        marginBottom: 30,
        textAlign: "center",
        fontSize: 20,
    },
    button: {
        width: 250,
        alignSelf: 'center',
    }
});


export default Default