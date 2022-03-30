import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';


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
            navigation.navigate('Tabs')
        }
    }
    return (
        <View style={styles.parent}>
            <Text>what do you call this place?</Text>
            <TextInput value={name} onChangeText={text => setName(text)} style={[styles.input, {width: 170}]} onSubmitEditing={saveDefault} placeholder="name of home location" />
            <Button mode='contained' style={[styles.button, {width: 150}]} onPress={saveDefault} color='#ff4d00'>set default</Button>
        </View>
    )
}


export default DefaultForm