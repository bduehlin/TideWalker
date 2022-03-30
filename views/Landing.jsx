import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-paper';
import SearchInput from '../components/SearchInput';
import styles from '../styles/styles';

const Landing = ({navigation}) => {

    const pressHandler = () => {
        // code to grab location, react-native-geolocation-service
        navigation.navigate('Tide', {
            latitude: 47.29,
            longitude: -122.67
        })
    }

    return (
        <View style={[styles.parent, {justifyContent: "space-between"}]}>
            <View style={styles.topdiv}>
                <Text style={styles.title}>Welcome to TideWalker</Text>
                <Text style={styles.text}>share your device location to check the oceans near you</Text>
                <Button mode='contained' style={styles.button} icon='map-marker-question' onPress={ pressHandler } color='#ff4d00'>share your location</Button>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={styles.text}>if you would rather search a location:</Text>
                <SearchInput/>
            </View>
        </View>
    )
}


export default Landing