import React, { Component, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const STORAGE_KEY = '@USER';

export default function Test() {
    const [authLink, setAuthLink] = useState('')
    const [userName, setUserName] = useState('')

    const getName = () => {
        if (authLink) {
            let str = authLink.slice(1);
            str = str.slice(0, str.length - 1);
            str = str.concat('/user/');
            axios.get(str)
                .then(async result => { setUserName(result['data']['firstname']) });
        }
    }

    const readData = async () => {
        try {
            const userAuthLink = await AsyncStorage.getItem(STORAGE_KEY)
            if (userAuthLink !== null) {
                setAuthLink(userAuthLink)
            }
        } catch (e) {
            alert('Failed to fetch the data from storage ' + e)
        }
    }

    useEffect(() => {
        readData()
        getName()
    }, [])

    return (
        <View>
            <Text>Hello {userName}</Text>
        </View>
    )
}
