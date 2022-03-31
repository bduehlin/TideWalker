import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

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
            if (closest[0] > 5) {
                setMessage("this place is too far from a station to be worth checking")
            }
            console.log("West, East of 180th meridian", closest)
            setStation(closest[1])
        }
        else if (coords.lng > 130) {
            const stations = require('../stations/WestStations.json')
            const closest = findClosest(stations, coords)
            if (closest[0] > 5) {
                setMessage("this place is too far from a station to be worth checking")
            }
            console.log("West, West of 180th meridian", closest)
            setStation(closest[1])
        }
        else if (coords.lng > -105 && coords.lng < 0 && coords.lat > 35.46) {
            const stations = require('../stations/NEastStations.json')
            const closest = findClosest(stations, coords)
            if (closest[0] > 5) {
                setMessage("this place is too far from a station to be worth checking")
            }
            console.log("NEast", closest)
            setStation(closest[1])
        }
        else if (coords.lng > -105 && coords.lng < 0 && coords.lat < 35.46) {
            const stations = require('../stations/SEastStations.json')
            const closest = findClosest(stations, coords)
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

    return (
        <>
            <Text>scanning the tides near {obj.formatted_address}</Text>
            <Text>{coords.lat} {coords.lng}</Text>
            {
                station.name ? <Text>{station.name}</Text> : <></>
            }
        </>
    )
}

export default StationFinder