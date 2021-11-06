import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Loader from '../components/Loader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InfosPage from './InfosPage';
import { BoxShadow } from 'react-native-shadow';

const Tab = createBottomTabNavigator();

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

    const shadowOpt = {
        width: 100,
        height: 100,
        color: "#000",
        border: 2,
        radius: 3,
        opacity: 0.2,
        x: 0,
        y: 3,
        style: { marginVertical: 5 }
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
            <Tab.Navigator
                initialRouteName="InfosPage"
                screenOptions={{
                    "tabBarShowLabel": false,
                    tabBarStyle: {
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        backgroundColor: '#0061FF',
                    }
                }
                }
            >
                <Tab.Screen
                    name="SideBar"
                    component={InfosPage}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Nav',
                        tabBarIcon: ({ color, size }) => (
                            <Image tintColor='white' source={require("../assets/IconMenu.png")} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="InfosPage"
                    component={InfosPage}
                    options={{
                        tabBarLabel: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image tintColor='white' source={(focused == true) ? require("../assets/IconHomeFilled.png") : require("../assets/IconHome.png")} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={InfosPage}
                    options={{
                        tabBarLabel: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image tintColor='white' source={(focused === true) ? require("../assets/IconProfilFilled.png") : require("../assets/IconProfil.png")} />
                        ),
                    }}
                />
            </Tab.Navigator >
        )
    }
}

const styles = StyleSheet.create({
});