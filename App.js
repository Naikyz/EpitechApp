import React, { useState, useRef } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')

  const webviewRef = useRef(null)

  backButtonHandler = () => {
    if (webviewRef.current)
      webviewRef.current.goBack()
  }
  frontButtonHandler = () => {
    if (webviewRef.current)
      webviewRef.current.goForward()
  }

  return (
    <View style={{ flex: 1 }}>
    <WebView
      source={{ uri: 'https://login.microsoft.com/' }}
      style={{ marginTop: 40 }}
      renderLoading={() => (
        <ActivityIndicator
          color='#2ed2d2'
          size='large'
          style={{
            flex: 1
          }}
        />
      )}
      startInLoadingState={true}
      ref={webviewRef}
      onNavigationStateChange={navState => {
        setCanGoBack(navState.canGoBack)
        setCanGoForward(navState.canGoForward)
        setCurrentUrl(navState.url)
      }}
    />
    <View
      style={{
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#2ed2d2'
      }}>
      <TouchableOpacity onPress={backButtonHandler}>
        <Text style={{ color: 'white', fontSize: 24 }}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={frontButtonHandler}>
        <Text style={{ color: 'white', fontSize: 24 }}>Forward</Text>
      </TouchableOpacity>
     </View>
</View>
  );
}

const styles = StyleSheet.create({
});