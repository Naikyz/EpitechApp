import React from 'react'
import { StyleSheet } from 'react-native';
import HomePage from './HomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Absences from './SubPages/Absences';
import Credits from './SubPages/Credits';
import Documents from './SubPages/Documents';
import LogtimeFlags from './SubPages/LogtimeFlags';
import PdfViewer from './SubPages/PdfViewer';

const Stack = createNativeStackNavigator();

function Profile() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="ProfileHomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileCredits" component={Credits} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileAbsences" component={Absences} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileDocuments" component={Documents} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileLogtimeFlags" component={LogtimeFlags} options={{ headerShown: false }} />
        <Stack.Screen name="E{pocket} PDF Viewer" component={PdfViewer} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Profile;