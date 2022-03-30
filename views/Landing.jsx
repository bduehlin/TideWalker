import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-paper';
import SearchInput from '../components/SearchInput';

const Landing = ({navigation}) => {

    const pressHandler = () => {
        // code to grab location, react-native-geolocation-service
        navigation.navigate('Tide', {
            latitude: 47.29,
            longitude: -122.67
        })
    }

    return (
        <View style={styles.parent}>
            <View style={styles.topdiv}>
                <Text style={styles.title}>Welcome to TideWalker</Text>
                <Text style={styles.text}>share your device location to check the oceans near you</Text>
                <Button mode='outlined' style={styles.button} icon='map-marker-question' onPress={ pressHandler }>share your location</Button>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={styles.text}>if you would rather search a location:</Text>
                <SearchInput/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    topdiv: {
        justifyContent: 'center',
        marginTop: '50%',
    },
    input: {
        height: 40,
        width: 150,
        margin: 12,
        marginBottom: 30,
        borderWidth: 1,
        padding: 10,
        alignSelf: 'center',
    },
    text: {
        marginBottom: 20,
        textAlign: "center",
        fontSize: 20,
    },
    title: {
        marginBottom: 20,
        textAlign: "center",
        fontSize: 30,
    },
    button: {
        width: 250,
        alignSelf: 'center',
    }
});

export default Landing