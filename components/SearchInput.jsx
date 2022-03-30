import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'

const SearchInput = () => {
    const [place, setPlace] = useState("")
    
    return (
        <TextInput value={place} onChangeText={text => setPlace(text)} style={styles.input} placeholder="where" />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 150,
        margin: 12,
        marginBottom: 30,
        borderWidth: 1,
        padding: 10,
        alignSelf: 'center',
    }
});

export default SearchInput