import AsyncStorage from '@react-native-async-storage/async-storage';

interface StoredData {
    value: string;
    key: string;
}

 export const storeData = async ({value, key}: StoredData) => {
  try {
    
    await AsyncStorage.setItem(key, value);
  } catch (e) {
console.log('', e);
  }
};
 export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) { 
    console.log('', e);

  }
};