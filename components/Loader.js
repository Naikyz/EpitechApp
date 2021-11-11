import React, { Component, useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import AnimatedEllipsis from 'react-native-animated-ellipsis';

export default function Loader() {
    return (
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#3A86FF' }}>
            <Image source={require('../assets/img/ELogo.png')} style={{}} />
            <Image source={require('../assets/img/Chrono.png')} style={{ width: 300, height: 300 }} />
            <Text style={styles.textStyle}>
                <AnimatedEllipsis numberOfDots={3}
                    minOpacity={0.1}
                    animationDelay={200}
                    style={{
                        color: '#fff',
                        fontSize: 150,
                        marginTop: -130,
                        letterSpacing: -15,
                    }}
                />
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        color: '#fff'
    }
})