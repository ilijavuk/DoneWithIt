import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "./routes";

const Stack = createStackNavigator();

const MyAccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.MY_ACCOUNT}
      component={MyAccountScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={Routes.MESSAGES} component={MessagesScreen} />
  </Stack.Navigator>
);

export default MyAccountNavigator;
