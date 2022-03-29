import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import axios from 'axios'
// import Spinner from 'react-native-spinkit'

const Tide = ({ navigation, route }) => {
    const { latitude, longitude } = route.params

    const [loadText, setLoadText] = useState("touching the seas")
    
    const [loaded, setLoaded] = useState(false)
    const [predictions, setPredictions] = useState([{t: null}])
    const [currentTime] = useState(new Date())
    const [countdown, setCountdown] = useState("")


    useEffect(() => {
        axios.get("https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=today&station=9446484&product=predictions&datum=mllw&time_zone=lst_ldt&interval=hilo&units=metric&format=json")
            .then((response) => {
                setLoaded(true)
                setPredictions(response.data.predictions)
            })
            .catch(() => {
                setLoadText("there was an error fetching tide data")
            })
    }, [])

    useEffect(() =>{
        if (predictions[0].t){
            let upcoming = 0
            console.log(currentTime)
            for (let i=0; i<predictions.length; i++) {
                let time = new Date(predictions[i].t)
                console.log(time)
                if (time > currentTime) {
                    console.log('Prediction found')
                    setLoadText(predictions[i].type === 'H'? "the tide is flowing": "the tide is ebbing")
                    const remaining = (time - currentTime)/60000
                    console.log(remaining)
                    if (remaining < 60){
                        setCountdown(parseInt(remaining) + " minutes")
                    }
                    else if (remaining < 120)
                        setCountdown("1 hour " + (parseInt(remaining)-60) + " minutes")
                    else {
                        let hours = parseInt(remaining/60)
                        let minutes = hours - remaining*60
                        setCountdown(hours +" hours" + parseInt(minutes) + " minutes")
                    }
                }
            }
        }
    }, [predictions])

    return (
        <View style={styles.parent}>
            {
                loaded ?
                    <>
                        <Text>{JSON.stringify(predictions)}</Text>
                        <Text>{loadText}</Text>
                        <Text>it will reverse in {countdown}</Text>
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

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        marginBottom: 30,
        textAlign: "center",
        fontSize: 20,
    },
});

export default Tide