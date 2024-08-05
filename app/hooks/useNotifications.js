import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../api/expoPushTokens";
import { useEffect } from "react";

const useNotifications = (notificationListener) => {
  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) {
        alert("Permission denied for notifs");
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      alert(token);
      expoPushTokensApi.register(token);
      console.log("token", token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };

  useEffect(() => {
    console.log("registering token");
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);
};

export default useNotifications;
