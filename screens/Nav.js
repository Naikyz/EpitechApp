import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Loader from '../components/Loader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile/Profile';
import Home from './Home';
import Sleep from '../components/Sleep';

const Tab = createBottomTabNavigator();

export default function Nav({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);

    const Sleeping = async () => {
        await Sleep(3000);
        setIsLoading(false);
    }

    useEffect(() => {
        Sleeping();
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
                    component={Home}
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