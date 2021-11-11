import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default async function saveUserLogin(key, value) {
    await axios.request({
        url: "https://intra.epitech.eu/user?format=json",
        method: "get",
        headers:{
            Cookie: "user=" + value + ";"
        }
    }).then(async response => {
        try {
            await AsyncStorage.setItem(
            key,
            JSON.stringify(response["data"]["login"])
            );
          } catch (error) {
            console.log("[ERROR ASYNCSTORAGE] = " + error)
          }
    })
}