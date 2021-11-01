import React from 'react';
import WebView from 'react-native-webview';
import Cookie from 'react-native-cookie';
import saveUserIntraToken from '../api/auth/saveUserIntraToken';

function getRightUrl(cookie, navigation) {
    if (cookie != null && cookie['user']) {
        saveUserIntraToken('@USER', cookie['user']);
        navigation.navigate('Test')
    }
}

export default function Login({ navigation }) {
    return (
        <WebView
            source={{ uri: 'https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&client_id=e05d4149-1624-4627-a5ba-7472a39e43ab&redirect_uri=https%3A%2F%2Fintra.epitech.eu%2Fauth%2Foffice365&state=%2F' }}
            onNavigationStateChange={
            infos => Cookie.get(infos['url'])
            .then((cookie) => {
                getRightUrl(cookie, navigation)
            })}
        />
    );
}
