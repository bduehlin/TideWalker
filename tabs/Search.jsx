import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchInput from '../components/SearchInput';

const Search = ({ navigation }) => {

    return (
        <View style={styles.parent}>
            <Text>measure the ocean</Text>
            <SearchInput />
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingTop: 50,
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


export default Search