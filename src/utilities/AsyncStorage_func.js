import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e)
        // saving error
    }
}
export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        // value previously stored
        return value
    } catch (e) {
        console.log(e)
        // error reading value
    }
}
export const removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }