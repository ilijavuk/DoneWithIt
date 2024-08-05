import ExpoUpdates from "expo-updates/src/ExpoUpdates";

const allChannelsSettings = {
  dev: {
    apiUrl: "http://192.168.18.22:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.18.22:9000/api",
  },
  prod: {
    apiUrl: "http://192.168.18.22:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return allChannelsSettings.dev;
  if (ExpoUpdates.channel === "staging") return allChannelsSettings.staging;
  return allChannelsSettings.prod;
};

const settings = getCurrentSettings();

export default settings;
