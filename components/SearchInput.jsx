import React, { useState } from 'react'
import { TextInput } from 'react-native'
import styles from '../styles/styles'

const SearchInput = (props) => {
    const [place, setPlace] = useState("")
    
    return (
        <TextInput value={place} onChangeText={text => setPlace(text)} style={styles.input} placeholder="where" selectionColor='#0048ff' onSubmitEditing={(e) => props.submit(place)}/>
    )
}

export default SearchInput