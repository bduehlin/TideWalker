import React, { useRef } from 'react'
import { View, Text, Image, Animated } from 'react-native'
import styles from '../styles/styles'


const CustomHeader = () => {
    const moveAnim = useRef(new Animated.Value(0)).current

    Animated.spring(moveAnim, {
        toValue: -70,
        stiffness: 3,
        damping: 1,
        mass: 10,
        useNativeDriver: true,
    }).start();

    return (
        <View style={styles.header}>
            <Text style={{ marginTop: 35, alignSelf: 'center', color: '#ff4d00', fontSize: 40, position:'absolute', fontFamily: 'Cantarell_700Bold_Italic'}}>TideWalker</Text>
            <Animated.Image style={[{ width: 600, height: 100, marginTop: 5 }, { transform: [{ translateX: moveAnim }] }]} source={require('../waves2.png')} />
        </View>
    )
}

export default CustomHeader