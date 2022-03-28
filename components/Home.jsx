import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-paper';
import WaveSpinner from '@fenderdigital/react-wave-spinner';

const Home = ({navigation}) => {
    const [place, setPlace] = useState("")

    const pressHandler = () => {
        // code to grab location, react-native-geolocation-service
        navigation.navigate('Tide')
    }

    return (
        <View style={styles.parent}>
            <View style={styles.topdiv}>
                <Text style={styles.title}>Welcome to TideWalker</Text>
                <Text style={styles.text}>Share your device location to check the oceans near you.</Text>
                <Button mode='outlined' style={styles.button} icon='map-marker-question' onPress={ pressHandler }>Share your location</Button>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={styles.text}>If you would rather search a location:</Text>
                <TextInput label="Anywhere" value={place} onChangeText={text => setPlace(text)} style={styles.input} placeholder="Where" />
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
        margin: 12,
        marginBottom: 30,
        borderWidth: 1,
        padding: 10,
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

export default Home