import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchInput from '../components/SearchInput';

import styles from '../styles/styles';

const Search = ({ navigation }) => {

    return (
        <View style={styles.parent}>
            <Text>measure the ocean</Text>
            <SearchInput />
        </View>
    )
}


export default Search