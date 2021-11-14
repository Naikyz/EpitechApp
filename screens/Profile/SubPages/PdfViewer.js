import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PdfViewer({ route }) {
    const { link } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <Pdf
                source={{ uri: link }}
                style={styles.pdf}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})