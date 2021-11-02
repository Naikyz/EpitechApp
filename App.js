import React, { Component } from 'react'
import { View, Text, Animated, StyleSheet } from 'react-native';
import Login from './screens/Login';
import HomeScreen from './screens/Home';
import Test from './screens/Test';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaskedView from '@react-native-masked-view/masked-view';

const Stack = createNativeStackNavigator();

function App() {
    return (
        // <View style={{ flex: 1 }}>
        //     <MaskedView style={{ flex: 1 }} maskElement={
        //         <View style={styles.centered}>
        //             <Animated.Image
        //                 source={require('./assets/EpiLogo.png')}
        //                 style={[{ width: 1000 }]}
        //                 resizeMode="contain"
        //             />
        //         </View>
        //     }
        //     >
        //         <Animated.View style={styles.centered}>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                            <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />
                        </Stack.Navigator>
                    </NavigationContainer>
        //         </Animated.View>
        //     </MaskedView>
        // </View>
    );
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default App;