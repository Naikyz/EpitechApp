import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LogtimeFlags({ navigation }) {
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }} style={styles.backArrow}>
                    <Image source={require('../../../assets/img/BackIcon.png')} />
                </TouchableOpacity>
                <Text style={styles.headerTextStyle}> Flags &{"\n"}Logtime</Text>
                <Image source={require('../../../assets/img/Flag.png')} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "#EAEEFF",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
    },
    headerView: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "90%",
        height: "15%",
        paddingTop: 3
    },
    headerTextStyle: {
        fontFamily: "Sora-Bold",
        fontSize: 30,
        color: "#000000",
    },
    backArrow: {
        width: "12%",
        height: "50%",
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
})
