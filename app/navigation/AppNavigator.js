import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FeedNavigator from "./FeedNavigator";
import Routes from "./routes";
import MyAccountNavigator from "./MyAccountNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";

const Tab = createBottomTabNavigator();

function Dummy() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Dummy</Text>
    </View>
  );
}

const EditListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        height: 80,
        width: 80,
        bottom: 20,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
      }}
    >
      <MaterialCommunityIcons
        name="plus-circle"
        size={40}
        color="white"
        style={{ backgroundColor: colors.danger }}
      />
    </TouchableOpacity>
  );
};

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: colors.danger,
      tabBarInactiveTintColor: colors.medium,
      tabBarStyle: [
        {
          direction: "flex",
        },
        null,
      ],
    }}
  >
    <Tab.Screen
      name={Routes.FEED}
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={Routes.EDIT_LISTING}
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <EditListingButton
            onPress={() => navigation.navigate(Routes.EDIT_LISTING)}
          />
        ),
      })}
    />
    <Tab.Screen
      name={Routes.MY_ACCOUNT}
      component={MyAccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
