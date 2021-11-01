import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default function saveUserIntraToken(key, value) {
    axios.request({
        url: "https://intra.epitech.eu/admin/autolog?format=json",
        method: "get",
        headers:{
            Cookie: "user=" + value + ";"
        }
    }).then(async response => {
        try {
            await AsyncStorage.setItem(
            key,
            JSON.stringify(response["data"]["autologin"])
            );
          } catch (error) {
            console.log("[ERROR ASYNCSTORAGE] = " + error)
          }
    })
}