import React from 'react'
import { Text } from 'react-native'

const StationFinder = ({obj}) => {
    const { location: coords } = obj.geometry
    console.log(coords.lat)
    console.log(coords.lng)
    return (
        <>
            <Text>scanning the tides near {obj.formatted_address}</Text>
            <Text>{coords.lat} {coords.lng}</Text>
        </>
    )
}

export default StationFinder