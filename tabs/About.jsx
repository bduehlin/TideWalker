import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles/styles'

const About = () => {

    return (
        <View style={[styles.parent]}>
            <Text style={[styles.text, { width: '100%', padding: 15, backgroundColor: '#ffaa85'}]}>I like to take long walks on the beach</Text>
            <Text style={{
                textAlign: 'auto',
                fontSize: 15, 
                padding: 20,
            }}>this app was created in march of 2022 by brian uehlin for the Coding Dojo bootcamp {'\n'}{'\n'}
            it utilizes the NOAA CO-OPS api to get data from US tide data stations {'\n'}
            it utilizes the google maps api to geocode user searches {'\n'}
            it is an expo-managed project utilizing many packages {'\n'}
            the source code can be found at github.com/bduehlin/TideWalker</Text>
        </View>
    )
}

export default About