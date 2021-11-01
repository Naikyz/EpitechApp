import React, { Component } from 'react'
import { Text, View , Button } from 'react-native'
import getUserIntraToken from '../api/auth/getUserIntraToken';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Connect"
                onPress={async () => (await getUserIntraToken('@USER') === null) ? navigation.navigate('Login') : navigation.navigate('Test')}
            />
        </View>
    );
}
