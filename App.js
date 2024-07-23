import { SafeAreaView } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText";

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <AppText>hello</AppText>
      <MaterialCommunityIcons name="email" size={200} color="dodgerblue" />
    </SafeAreaView>
  );
}
