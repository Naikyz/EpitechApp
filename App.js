import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <WebView
        source={{ uri: 'https://login.microsoftonline.com/' }}
        style={styles.webView}
      />
  );
}

const styles = StyleSheet.create({
  webView: {
    marginTop: 20
  }
});