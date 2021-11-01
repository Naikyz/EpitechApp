import AsyncStorage from '@react-native-community/async-storage';

export default async function getUserIntraToken(key) {
    const value =  await AsyncStorage.getItem(key);
    return (value != null) ? JSON.parse(value) : null;
}