import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Loader from '../components/Loader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import SignIn from './SignIn';

const Tab = createBottomTabNavigator();

export default function Nav({ navigation }) {
    const [userName, setUserName] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const readData = async () => {
        const userAuthLink = await AsyncStorage.getItem('@USER')
        if (userAuthLink !== null) {
            let str = userAuthLink.slice(1);
            str = str.slice(0, str.length - 1);
            str = str.concat('/user/');
            axios.get(str)
                .then(async result => {
                    setUserName(result['data']['firstname']);
                    // setIsLoading(false);
                });
        }
    }

    useEffect(() => {
        readData();
    }, [])

    if (isLoading === true)
        return (
            <SignIn />
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
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Nav',
                        tabBarIcon: ({ color, size }) => (
                            <Image tintColor='white' source={require("../assets/img/IconMenu.png")} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="InfosPage"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image tintColor='white' source={(focused == true) ? require("../assets/img/IconHomeFilled.png") : require("../assets/img/IconHome.png")} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image tintColor='white' source={(focused === true) ? require("../assets/img/IconProfilFilled.png") : require("../assets/img/IconProfil.png")} />
                        ),
                    }}
                />
            </Tab.Navigator >
        )
    }
}

const styles = StyleSheet.create({
});