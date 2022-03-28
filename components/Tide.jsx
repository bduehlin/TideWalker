import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

const Tide = () => {
    return (
        <View style={styles.parent}>
            <ActivityIndicator size='large' color="#0000ff" />
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
});

export default Tide