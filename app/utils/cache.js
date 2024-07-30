import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache";

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = Date.now();
  const storedTime = item.timestamp;
  return now - storedTime > 1000 * 60 * 5;
};

const get = async (key) => {
  try {
    const item = await JSON.parse(await AsyncStorage.getItem(prefix + key));
    if (!item) return null;

    if (isExpired(item)) {
      // Command Query Separation (CQS)
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
