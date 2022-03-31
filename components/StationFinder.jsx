import React from 'react'
import { Text } from 'react-native'

const StationFinder = ({coords}) => {
    console.log(coords.lat)
    console.log(coords.lng)
    return (
        <Text>{coords.lat} {coords.lng}</Text>
    )
}

export default StationFinder