import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import TideData from '../components/TideData';
import SearchInput from '../components/SearchInput';
// import Spinner from 'react-native-spinkit'
import styles from '../styles/styles';

const Tide = ({ navigation, route }) => {
    const { latitude, longitude } = route.params

    const defaultHandler = () => {
        navigation.navigate('DefaultForm', {
            station: 9446484
        })
    }

    return (
        <View style={[styles.parent, {justifyContent: 'space-between'}]}>
            <View style={styles.childbox}>
                <TideData station={9446484} />
                <Button mode='contained' style={{ ...styles.button, width: 300 }} onPress={defaultHandler} color='#ff4d00'>use this location as default</Button>
            </View>
            <View style={styles.childbox}>
                <Text style={styles.text}>or search for a new coast</Text>
                <SearchInput />
            </View>
        </View>
    )
}

export default Tide