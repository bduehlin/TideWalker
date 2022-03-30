import React, { useState } from 'react'
import { TextInput } from 'react-native'
import styles from '../styles/styles'

const SearchInput = () => {
    const [place, setPlace] = useState("")
    
    return (
        <TextInput value={place} onChangeText={text => setPlace(text)} style={styles.input} placeholder="where" selectionColor='#0048ff'/>
    )
}

export default SearchInput