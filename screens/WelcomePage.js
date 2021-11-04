import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Loader from '../components/Loader';

export default function WelcomePage({ navigation }) {
    const [userName, setUserName] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const readData = async () => {
        const userAuthLink = await AsyncStorage.getItem('@USER')
        if (userAuthLink !== null) {
            let str = userAuthLink.slice(1);
            str = str.slice(0, str.length - 1);
            str = str.concat('/user/');
            axios.get(str)
                .then(async result => { setUserName(result['data']['firstname']); setIsLoading(false); });
        }
    }

    useEffect(() => {
        readData();
    }, [])

    if (isLoading === true)
        return (
            <Loader />
        )
    else {
        return (
            <View><Text>Welcome {userName}</Text></View>
        )
    }
}

const styles = StyleSheet.create({
  });