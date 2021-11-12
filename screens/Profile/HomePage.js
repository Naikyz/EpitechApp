import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage({navigation}) {
    let pdfLogo = <Image source={require('../../assets/img/PdfLogo.png')} />;
    const [isLoading, setIsLoading] = useState(true);
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userGpa, setUserGpa] = useState('');
    const [userCredits, setUserCredits] = useState('');
    const [userYear, setUserYear] = useState('');
    const [userDocuments, setUserDocuments] = useState([]);
    const [userMissed, setUserMissed] = useState([]);
    const [userFlags, setUserFlags] = useState([]);
    const [userModules, setUserModules] = useState([]);

    const readData = async () => {
        const userAuthLink = await AsyncStorage.getItem('@USER')
        const userLogin = await AsyncStorage.getItem('@LOGIN')
        if (userAuthLink !== null) {
            let str = userAuthLink.slice(1);
            let login = userLogin.slice(1);
            let str2 = "";
            let str3 = "";
            login = login.slice(0, login.length - 1);
            str = str.slice(0, str.length - 1);
            str = str.concat('/user/');
            await axios.get(str)
                .then(async result => {
                    setUserFirstName(result['data']['firstname']);
                    setUserLastName(result['data']['lastname']);
                    setUserGpa(result['data']['gpa'][0]['gpa']);
                    setUserCredits(result['data']['credits']);
                    setUserYear(result['data']['studentyear']);
                });
            str2 = str.concat(login + '/document/')
            await axios.get(str2)
                .then(async result => {
                    setUserDocuments(result['data'])
                });
            str3 = str.concat(login + '/print/')
            await axios.get(str3)
                .then(async result => {
                    setUserMissed(result['data']['missed']);
                    setUserFlags(result['data']['flags']);
                    setUserModules(result['data']['modules'])
                });
            setIsLoading(false);
        }
    }

    useEffect(() => {
        readData();
    }, [])

    if (isLoading === true)
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    else {
        return (
            <SafeAreaView style={styles.mainView}>
                <View style={styles.headerView}>
                    <Text style={styles.headerTextStyle}>{userFirstName + "\n" + userLastName[0].toUpperCase() + userLastName.slice(1).toLowerCase() + "\n" + userGpa}</Text>
                    <TouchableOpacity onPress={() => { }} style={styles.options}>
                        <Image source={require('../../assets/img/Options.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView vertical contentContainerStyle={styles.cards} style={{ width: '100%', height: '30%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('ProfileCredits') }} style={[styles.card, { width: "90%", height: 120, marginTop: 15 }]}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.textStyle}>Credits <Image source={require('../../assets/img/GotoButton.png')} /></Text>
                            <Text style={styles.textStyle}>{userCredits}/{60 * userYear}</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <Text style={styles.cardText}>{(userModules[userModules.length - 1] !== undefined) ? userModules[userModules.length - 1]['title'].substring(0, 15) + "...   " : ""}</Text>
                            <Text style={styles.cardText}>{(userModules[userModules.length - 2] !== undefined) ? userModules[userModules.length - 2]['title'].substring(0, 15) + "...   " : ""}</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <Text style={styles.cardText}>{(userModules[userModules.length - 3] !== undefined) ? userModules[userModules.length - 3]['title'].substring(0, 15) + "...   " : ""}</Text>
                            <Text style={styles.cardText}>{(userModules[userModules.length - 4] !== undefined) ? userModules[userModules.length - 4]['title'].substring(0, 15) + "...   " : ""}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('ProfileAbsences') }} style={[styles.card, { width: "90%", height: 120, marginTop: 15 }]}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.textStyle}>Recent Absences <Image source={require('../../assets/img/GotoButton.png')} /></Text>
                        </View>
                        <View style={{ display: "flex", justifyContent: "space-around", height: "70%" }}>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                <Text style={styles.cardText}>{(userMissed[userMissed.length - 1] !== undefined) ? userMissed[userMissed.length - 1]['acti_title'].substring(0, 15) + "...   " : ""}</Text>
                                <Text style={styles.cardText}>{(userMissed[userMissed.length - 2] !== undefined) ? userMissed[userMissed.length - 2]['acti_title'].substring(0, 15) + "...   " : ""}</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                <Text style={styles.cardText}>{(userMissed[userMissed.length - 3] !== undefined) ? userMissed[userMissed.length - 3]['acti_title'].substring(0, 15) + "...   " : ""}</Text>
                                <Text style={styles.cardText}>{(userMissed[userMissed.length - 4] !== undefined) ? userMissed[userMissed.length - 4]['acti_title'].substring(0, 15) + "...   " : ""}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('ProfileDocuments') }} style={[styles.card, { width: "90%", height: 120, marginTop: 15 }]}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.textStyle}>Documents <Image source={require('../../assets/img/GotoButton.png')} /></Text>
                        </View>
                        <View style={{ display: "flex", justifyContent: "space-around", height: "70%" }}>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                <Text style={styles.cardText}>{(userDocuments[userDocuments.length - 1] !== undefined) ? userDocuments[userDocuments.length - 1]['title'].substring(0, 13) + "..." : ""} {(userDocuments[userDocuments.length - 1] !== undefined) ? pdfLogo : ""}</Text>
                                <Text style={styles.cardText}>{(userDocuments[userDocuments.length - 2] !== undefined) ? userDocuments[userDocuments.length - 2]['title'].substring(0, 12) + "..." : ""} {(userDocuments[userDocuments.length - 2] !== undefined) ? pdfLogo : ""}</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                <Text style={styles.cardText}>{(userDocuments[userDocuments.length - 3] !== undefined) ? userDocuments[userDocuments.length - 3]['title'].substring(0, 13) + "..." : ""} {(userDocuments[userDocuments.length - 3] !== undefined) ? pdfLogo : ""}</Text>
                                <Text style={styles.cardText}>{(userDocuments[userDocuments.length - 4] !== undefined) ? userDocuments[userDocuments.length - 4]['title'].substring(0, 12) + "..." : ""} {(userDocuments[userDocuments.length - 4] !== undefined) ? pdfLogo : ""}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('ProfileLogtimeFlags') }} style={[styles.card, { width: "90%", height: 110, marginTop: 15 }]}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.textStyle}>Logtime & flags <Image source={require('../../assets/img/GotoButton.png')} /></Text>
                            <Image source={require('../../assets/img/Colors.png')} />
                        </View>
                        <View style={{ display: "flex", justifyContent: "space-around", height: "70%" }}>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.cardText}>{userFlags['difficulty']['label']}<Text style={{ fontWeight: 'bold' }}> {userFlags['difficulty']['modules'].length}</Text></Text>
                                <Text style={styles.cardText}>{userFlags['ghost']['label']}<Text style={{ fontWeight: 'bold' }}> {userFlags['ghost']['modules'].length}</Text></Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.cardText}>{userFlags['medal']['label']}<Text style={{ fontWeight: 'bold' }}> {userFlags['medal']['modules'].length}</Text></Text>
                                <Text style={styles.cardText}>{userFlags['remarkable']['label']}<Text style={{ fontWeight: 'bold' }}> {userFlags['remarkable']['modules'].length}</Text></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "#EAEEFF",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
    },
    options: {
        width: "13%",
        height: "35%",
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    headerTextStyle: {
        fontFamily: "Sora",
        fontWeight: "bold",
        fontSize: 24,
        color: "#000000",
    },
    headerView: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "90%",
        height: "15%",
        // backgroundColor: "red",
        paddingTop: 3
    },
    cards: {
        display: "flex",
        alignItems: "center",
        paddingBottom: "5%"
    },
    card: {
        borderRadius: 25,
        backgroundColor: "#FFFFFF",
        padding: 10,
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
    cardHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    cardText: {
        fontFamily: "Poppins-Regular",
        fontSize: 18,
        color: "#000000",
    },
    textStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24,
        fontWeight: 'bold',
        color: "#000000"
    }
});