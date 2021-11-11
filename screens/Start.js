import React, { useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default function Start({ navigation }) {

    const setAlreadyLogged = async () => {
        await AsyncStorage.setItem("isUserAlreadyLogged", "Y");
    }

    return (
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#3A86FF' }}>
            <Image source={require('../assets/img/ELogo.png')} />
            <Image source={require('../assets/img/Rocket.png')} style={{ width: 300, height: 300 }} />
            <Text style={[styles.textBrand, { marginTop: -30 }]}>Epitech Intranet</Text>
            <Text style={[styles.textBrand, { marginTop: -40 }]}> and more in your Pocket</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                    setAlreadyLogged()
                    navigation.navigate('SignIn')
                }}
            >
                <Text style={styles.textButton} >Let's Start !</Text>
            </TouchableOpacity>
            <Text style={[styles.textFooter, { marginTop: 10 }]}>Continuing means you're okay with our</Text>
            <Text onPress={() => Linking.openURL('https://google.com')} style={[styles.textFooter, { marginTop: -25 }, { textDecorationLine: 'underline', }]}>Terms of service, Privacy Policy and default Notifications settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textBrand: {
        color: '#EBFDFF',
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        fontSize: 28,
        lineHeight: 42
    },
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
    },
    textButton: {
        fontFamily: 'Sora-Regular',
        fontSize: 22,
        color: '#1A1A2F',
        fontWeight: '600'
    },
    textFooter: {
        color: '#EBFDFF',
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 11
    }
})