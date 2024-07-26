import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "./routes";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      title: "",
      headerTransparent: true,
    }}
  >
    <Stack.Screen name={Routes.WELCOME} component={WelcomeScreen} />
    <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
    <Stack.Screen name={Routes.REGISTER} component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
