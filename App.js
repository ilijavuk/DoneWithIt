import React from "react";
import { SafeAreaView } from "react-native";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#f8f4f4" }}>
      <ListingDetailsScreen />
    </SafeAreaView>
  );
}
