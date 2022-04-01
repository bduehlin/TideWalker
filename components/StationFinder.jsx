import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import TideData from './TideData'
import { Button } from 'react-native-paper'
import styles from '../styles/styles'
import { useNavigation } from '@react-navigation/native'

const StationFinder = ({ obj }) => {
    const { location: coords } = obj.geometry

    const [message, setMessage] = useState("")
    const [station, setStation] = useState({})

    const findClosest = (stations, coords) => {
        const closest = [1000, stations[0]]
        for (const station of stations) {
            const distance = Math.sqrt(Math.pow((station.lat - coords.lat), 2) + Math.pow((station.lng - coords.lng), 2))
            if (distance < closest[0]) {
                closest[0] = distance
                closest[1] = station
            }
        }
        return closest
    }

    useEffect(() => {
        if (coords.lng < -105) {
            const stations = require('../stations/WestStations.json')
            const closest = findClosest(stations, coords)
            if (closest[0] > 2) {
                setMessage("this place is too far from a station to be worth checking")
            }
            else {
                console.log("West, East of 180th meridian", closest)
                setStation(closest[1])
            }
        }
        else if (coords.lng > 130) {
            const stations = require('../stations/WestStations.json')
            const closest = findClosest(stations, coords)
            if (closest[0] > 2) {
                setMessage("this place is too far from a station to be worth checking")
            }
            else {
                console.log("West, West of 180th meridian", closest)
                setStation(closest[1])
            }
        }
        else if (coords.lng > -105 && coords.lng < 0 && coords.lat > 35.46) {
            const stations = require('../stations/NEastStations.json')
            const closest = findClosest(stations, coords)
            if (closest[0] > 2) {
                setMessage("this place is too far from a station to be worth checking")
            }
            else {
                console.log("NEast", closest)
                setStation(closest[1])
            }
        }
        else if (coords.lng > -105 && coords.lng < 0 && coords.lat < 35.46) {
            const stations = require('../stations/SEastStations.json')
            const closest = findClosest(stations, coords)
            if (closest[0] > 2) {
                setMessage("this place is too far from a station to be worth checking")
            }
            else {
                console.log("SEast", closest)
                setStation(closest[1])
            }
        }
        else {
            setMessage("this place is too far from a station to be worth checking")
        }
    }, [])

    const navigation = useNavigation()

    const defaultHandler = () => {
        navigation.navigate('DefaultForm', {
            station: station.id
        })
    }

    return (
        <>
            <Text>scanning the tides near {obj.formatted_address}</Text>
            <Text>{coords.lat} {coords.lng}</Text>
            {
                message ? <Text>{message}</Text> : <></>
            }
            {
                station.name ?
                    <>
                        <Text>{station.name}</Text>
                        <TideData station={station.id} />
                        <Button mode='contained' style={[ styles.button, {width: 300} ]} onPress={defaultHandler} color='#ff4d00'>use this location as default</Button>
                    </>
                    :
                    <></>
            }
        </>
    )
}

export default StationFinder