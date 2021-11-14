import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

let line = 0;

export default function Absences({ route, navigation }) {
    const { missed } = route.params;

    function Item({ title, date }) {
        let style;
        let year = date.slice(0, 4);
        let month = date.slice(5, 7);
        let day = date.slice(8, 10);
        if (line % 2 == 0) {
            style = styles.item1;
        } else {
            style = styles.item2;
        }
        line++;
        return (
            <TouchableOpacity style={style}>
                <Text style={styles.title}>{title.substring(0, 21) + "..."}</Text>
                <Text style={styles.date}>{day+"/"+month+"/"+year}</Text>
            </TouchableOpacity>
        );
    };
    
    function renderItem({ item }) {
        return (
            <Item title={item.acti_title} date={item.begin} />
        );
    }
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }} style={styles.backArrow}>
                    <Image source={require('../../../assets/img/BackIcon.png')} />
                </TouchableOpacity>
                <Text style={styles.headerTextStyle}>Absences</Text>
                <Image source={require('../../../assets/img/ThumbDown.png')} />
            </View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.textStyle}>Absences</Text>
                    <Text style={styles.textStyle}>{missed.length}</Text>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={true}
                    vertical={true}
                    data={missed}
                    renderItem={renderItem}
                    keyExtractor={item => item.acti_title}
                />
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
        fontSize: 40,
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
    card: {
        width: '90%',
        maxHeight: '82%',
        borderRadius: 25,
        backgroundColor: "#FFFFFF",
        padding: 10,
        //ShadowBox IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        //ShadowBox Android
        elevation: 7,
    },
    cardHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    textStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24,
        fontWeight: 'bold',
        color: "#000000"
    },
    item1: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#EEF5FF",
        height: 50,
    },
    item2: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        height: 50,
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: "#000000"
    },
    date: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: "#000000"
    }
})
