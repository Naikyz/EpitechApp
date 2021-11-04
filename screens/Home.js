import React, { useEffect, useState } from 'react'
import { Text, View, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../components/Loader';
import Sleep from '../components/Sleep';

export default function HomeScreen({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);

    const isUserLoaded = async () => {
        const Token = await AsyncStorage.getItem('@USER')
        if (Token !== null) {
            navigation.navigate('InfosPage')
        }
        await Sleep(1000);
        setIsLoading(false);
    }

    useEffect(() => {
        isUserLoaded();
    }, []);

    if (isLoading === true) {
        return (
            <Loader />
        )
    } else {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Connect"
                    onPress={async () => navigation.navigate('Login')}
                />
            </View>
        );
    }
}
