import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import { authorize, refresh } from 'react-native-app-auth';
import axios from 'axios';

const AuthConfig = {
  appId: "3e5d62ee-fff4-4b6c-9206-fcfe9a6e0314",
  tenantId: "901cb4ca-b862-4029-9306-e5cd0f6d9f86",
  appScopes: [
    'openid',
    'offline_access',
    'profile',
  ],
};

const config = {
  warmAndPrefetchChrome: true,
  clientId: AuthConfig.appId,
  redirectUrl: 'https://intra.epitech.eu/',
  scopes: AuthConfig.appScopes,
  additionalParameters: { prompt: 'select_account' },
  serviceConfiguration: {
    authorizationEndpoint: 'https://login.microsoftonline.com/' + AuthConfig.tenantId + '/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/' + AuthConfig.tenantId + '/oauth2/v2.0/token',
  },
};

const App = () => {
  const [result, setResult] = useState({});

  loginWithOffice365 = async () => {
    let tempResult = await authorize(config);
    setResult(tempResult);
  };

  function nameReq (token) {
    console.log(token)
    const format = "?format=json";
    const instance = axios.create({
      baseURL: 'http://intra.epitech.eu/',
      timeout: 1000,
      headers: {'Authorization': 'Bearer ' + token['accessToken']}
    });
    
    instance.get('/admin/autolog')
    .then(response => {
        console.log(response.data['autologin']);
    })
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => loginWithOffice365()}>
          <Text style={styles.loginText}>Login with Office365</Text>
        </TouchableHighlight>
        <View>{result.accessToken ? nameReq(result): <Text>Connexion Error</Text>}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#3659b8',
  },
  loginText: {
    color: 'white',
  },
});

export default App;