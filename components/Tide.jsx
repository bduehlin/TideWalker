import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import TideData from './TideData';
// import Spinner from 'react-native-spinkit'

const Tide = ({ navigation, route }) => {
    const { latitude, longitude } = route.params

    const defaultHandler = () => {
        navigation.navigate('DefaultForm', {
            station: 9446484
        })
    }

    return (
        <View style={styles.parent}>
            <TideData station={9446484} />
            <Button mode='outlined' style={{ ...styles.button, width: 300 }} onPress={defaultHandler}>use this location as default</Button>
            <Button mode='outlined' style={styles.button} >sea another place</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
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

export default Tide