import React, { Component } from 'react'
import { View, ActivityIndicator, Text } from 'react-native'

export default class Loader extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#3A86FF'}}>
                {/* <Image source={require('../assets/')} /> */}
                <Text>Hello</Text>
            </View>
        )
    }
}
