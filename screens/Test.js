import React, { Component, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const STORAGE_KEY = '@USER';

export default function Test({ navigation }) {
    const [userName, setUserName] = useState('')

    const readData = async () => {
        const userAuthLink = await AsyncStorage.getItem(STORAGE_KEY)
        if (userAuthLink !== null) {
            let str = userAuthLink.slice(1);
            str = str.slice(0, str.length - 1);
            str = str.concat('/user/');
            axios.get(str)
                .then(async result => { setUserName(result['data']['firstname']) });
        }
    }

    useEffect(() => {
        readData();
    }, [])

    return (
        <View>
            <Text>Hello {userName}</Text>
        </View>
    )
}
