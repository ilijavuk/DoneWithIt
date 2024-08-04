import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "./app/components/Screen";
import { LogBox, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";
import AppNavigator from "./app/navigation/AppNavigator";
import AppLoading from "expo-app-loading";

LogBox.ignoreLogs(["Warning: ...", "It appears", "expo-app"]); // Ignore log notification by message

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

export default function App() {
  const [user, setUser] = useState();
  const [isAppReady, setIsAppReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUserFromToken();
    setUser(user);
  };

  return isAppReady ? (
    <AuthContext.Provider value={{ user, setUser }}>
      <GestureHandlerRootView>
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  ) : (
    <AppLoading
      startAsync={restoreUser}
      onError={(error) => console.log(error)}
      onFinish={() => setIsAppReady(true)}
    />
  );
}
