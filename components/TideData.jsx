import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import axios from 'axios'
import { format } from 'date-fns'
import styles from '../styles/styles'

const TideData = ({station}) => {

    const [loadText, setLoadText] = useState("touching the seas")
    const [lastTide, setLastTide] = useState("")
    const [nextTide, setNextTide] = useState("")
    const [loaded, setLoaded] = useState(false)

    const [predictions, setPredictions] = useState([{t: null}])

    const [countdown, setCountdown] = useState("")


    useEffect(() => {
        const today = format(new Date(), 'yyyyMMdd')
        const tomorrow = format(new Date(new Date().getTime() + 24 * 60 * 60 * 1000), 'yyyyMMdd')
        axios.get("https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date="+today+"&end_date="+tomorrow+"&station="+station+"&product=predictions&datum=mllw&time_zone=gmt&interval=hilo&units=metric&format=json")
            .then((response) => {
                setLoaded(true)
                setPredictions(response.data.predictions)
            })
            .catch((e) => {
                setLoadText("there was an error fetching tide data")
                console.log(e)
            })
    }, [station])

    useEffect(() =>{
        if (predictions[0].t){
            const now = new Date()
            for (let i=0; i<predictions.length; i++) {
                let time = new Date(predictions[i].t.substring(0,10) + "T" + predictions[i].t.substring(11)+"Z")
                if (time > now) {
                    if (predictions[i].type === 'H'){
                        setLoadText( "the tide is flowing higher")
                        setLastTide(`the last low tide was ${predictions[i-1].v} meters ${predictions[i-1].v > 0? "above": "below"} mean lower low water level`)
                        setNextTide(`, at the coming high tide, with a water level of ${predictions[i].v} ${predictions[i].v > 0? "above": "below"} mean lower low water level`)
                    }
                    else {
                        setLoadText("the tide is ebbing lower")
                        setLastTide(`the last high tide was ${predictions[i-1].v} meters ${predictions[i-1].v > 0? "above": "below"} mean lower low water level`)
                        setNextTide(`, at the coming low tide, with a water level of ${predictions[i].v} ${predictions[i].v > 0? "above": "below"} mean lower low water level`)
                    }
                    const remaining = (time - now)/60000
                    if (remaining < 60){
                        const minutes = parseInt(remaining)
                        minutes <= 1? setCountdown("1 minute") : setCountdown(minutes + " minutes")
                    }
                    else if (remaining < 120)
                        setCountdown("1 hour " + (parseInt(remaining)-60) + " minutes")
                    else {
                        let hours = parseInt(remaining/60)
                        let minutes = remaining - hours*60 
                        setCountdown(hours +" hours, " + parseInt(minutes) + " minutes")
                    }
                    break
                }
                else {
                    setLoadText("i'm sorry, the ocean is broken")
                }
            }
        }
    }, [predictions])

    return (
        <View style={styles.parent}>
            {
                loaded ?
                    <>
                        {/* <Text>{JSON.stringify(predictions)}</Text> */}
                        <Text style={styles.text}>{loadText}</Text>
                        <Text>{lastTide}</Text>
                        <Text>it will reverse in {countdown}{nextTide}</Text>
                    </>
                    :
                    <>
                        <Text style={styles.text}>{loadText}</Text>
                        <ActivityIndicator size='large' color="#0000ff" />
                    </>
            }
        </View>
    )
}
export default TideData
