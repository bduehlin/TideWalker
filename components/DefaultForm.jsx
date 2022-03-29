import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';


const DefaultForm = ({ navigation, route }) => {

    const { station } = route.params

    const [name, setName] = useState("")

    const saveDefault = async () => {
        try {
            await AsyncStorage.setItem('default', JSON.stringify({
                station,
                name
            }))
            console.log('saved!')
        } catch (e) {
            // saving error
            console.log(e)
        } finally {
            navigation.navigate('Default')
        }
    }
    return (
        <View style={styles.parent}>
            <Text>what do you call this place?</Text>
            <TextInput value={name} onChangeText={text => setName(text)} style={styles.input} onSubmitEditing={saveDefault} placeholder="name of home location" />
            <Button mode='outlined' style={{ ...styles.button }} onPress={saveDefault}>set default</Button>
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
    input: {
        height: 40,
        width: 200,
        margin: 12,
        marginBottom: 30,
        borderWidth: 1,
        padding: 10,
        alignSelf: 'center',
    },
    button: {
        width: 250,
        alignSelf: 'center',
    }
});


export default DefaultForm