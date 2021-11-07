import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default class SignIn extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#3A86FF' }}>
                <Image source={require('../assets/img/ELogo.png')} />
                <Text style={{ alignItems: 'center', marginTop: -25, color: '#EBFDFF', fontSize: 30, fontWeight: '500' }}>Welcome Back !</Text>
                <Image source={require('../assets/img/Lock.png')} style={{ width: 300, height: 300 }} />
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={{ fontFamily: 'Sora-Regular', fontSize: 22, color: '#1A1A2F', fontWeight: '600' }} >Sign-In</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EBFDFF',
        width: '45%',
        height: '8%',
        alignItems: 'center',
        padding: 6,
        borderRadius: 10,
        //ShadowBox IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        //ShadowBox Android
        elevation: 7,
    }
})