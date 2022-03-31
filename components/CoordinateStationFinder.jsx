import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import TideData from './TideData'
import { Button } from 'react-native-paper'
import styles from '../styles/styles'
import { useNavigation } from '@react-navigation/native';

const CoordinateStationFinder = ({ latitude, longitude }) => {

    const [message, setMessage] = useState("")
    const [station, setStation] = useState({})

    const navigation = useNavigation();

    const findClosest = (stations) => {
        const closest = [1000, stations[0]]
        for (const station of stations) {
            const distance = Math.sqrt(Math.pow((station.lat - latitude), 2) + Math.pow((station.lng - longitude), 2))
            if (distance < closest[0]) {
                closest[0] = distance
                closest[1] = station
            }
        }
        console.log(closest)
        return closest
    }

    useEffect(() => {
        console.log(latitude, longitude)
        if (longitude < -105) {
            const stations = require('../stations/WestStations.json')
            const closest = findClosest(stations)
            if (closest[0] > 5) {
                setMessage("this place is too far from a station to be worth checking")
            }
            console.log("West, East of 180th meridian", closest)
            setStation(closest[1])
        }
        else if (longitude > 130) {
            const stations = require('../stations/WestStations.json')
            const closest = findClosest(stations)
            if (closest[0] > 5) {
                setMessage("this place is too far from a station to be worth checking")
            }
            console.log("West, West of 180th meridian", closest)
            setStation(closest[1])
        }
        else if (longitude > -105 && longitude < 0 && latitude > 35.46) {
            const stations = require('../stations/NEastStations.json')
            const closest = findClosest(stations)
            if (closest[0] > 5) {
                setMessage("this place is too far from a station to be worth checking")
            }
            console.log("NEast", closest)
            setStation(closest[1])
        }
        else if (longitude > -105 && longitude < 0 && latitude < 35.46) {
            const stations = require('../stations/SEastStations.json')
            const closest = findClosest(stations)
            if (closest[0] > 5) {
                setMessage("this place is too far from a station to be worth checking")
            }
            console.log("SEast", closest)
            setStation(closest[1])
        }
        else {
            console.log("this place is too far from a station to be worth checking")
            setMessage("this place is too far from a station to be worth checking")
        }
    }, [])

    const defaultHandler = () => {
        navigation.navigate('DefaultForm', {
            station: station.id
        })
    }

    return (
        <>
            <Text>scanning the tides near {latitude} {longitude}</Text>
            {
                station.name ?
                    <>
                        <Text>{station.name}</Text>
                        <TideData station={station.id} />
                        <Button mode='contained' style={{ ...styles.button, width: 300 }} onPress={defaultHandler} color='#ff4d00'>use this location as default</Button>
                    </>
                    :
                    <></>
            }
        </>
    )
}

export default CoordinateStationFinder