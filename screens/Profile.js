import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Loader from '../components/Loader';

export default function Profile({ navigation }) {
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userLogin, setUserLogin] = useState('');
    const [userGpa, setUserGpa] = useState('');
    const [userCredits, setUserCredits] = useState('');

    const readData = async () => {
        const userAuthLink = await AsyncStorage.getItem('@USER')
        if (userAuthLink !== null) {
            let str = userAuthLink.slice(1);
            str = str.slice(0, str.length - 1);
            str = str.concat('/user/');
            axios.get(str)
                .then(async result => {
                    setUserFirstName(result['data']['firstname']);
                    setUserLastName(result['data']['lastname']);
                    setUserLogin(result['data']['login']);
                    setUserGpa(result['data']['gpa'][0]['gpa']);
                    setUserCredits(result['data']['credits']);
                });
        }
    }
    const imageUrl = 'https://intra.epitech.eu/file/userprofil/profilview/' + userLogin + '.jpg';

    useEffect(() => {
        readData();
    }, [])

    return (
        <View>
            <Image
                source={{ uri: imageUrl }}
                style={styles.circleProfilePicture}
            />
            <Text>Welcome {userFirstName + " " + userLastName}</Text>
            <Text>Your GPA is {userGpa}</Text>
            <Text>You have {userCredits} credits</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    circleProfilePicture: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    }
});