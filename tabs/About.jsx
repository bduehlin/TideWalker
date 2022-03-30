import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles/styles'

const About = () => {

    return (
        <View style={[styles.parent, {justifyContent: "none"}]}>
            <Text style={[styles.text, {marginTop: 50}]}>About TideWalker</Text>
            <Text style={[styles.text, {textAlign: 'none', fontSize: 15}]}>this app was created in march of 2022 by Brian Uehlin for the Coding Dojo bootcamp {'\n'}
            it utilizes the NOAA CO-OPS API to get data from US tide data stations {'\n'}
            it utilizes the google maps API to geocode user searches</Text>
        </View>
    )
}

export default About