import { Image, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import viewImageScreenStyles from "./ViewImageScreen.styles";

export default function ViewImageScreen() {
  return (
    <View style={viewImageScreenStyles.container}>
      <View style={viewImageScreenStyles.navbar}>
        <MaterialCommunityIcons name="close" size={35} color="#fff" />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="#fff"
        />
      </View>
      <Image
        style={viewImageScreenStyles.image}
        source={require("app/assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}
