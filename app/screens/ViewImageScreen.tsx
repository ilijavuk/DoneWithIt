import { Image, StyleSheet, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <MaterialCommunityIcons name="close" size={35} color="#fff" />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="#fff"
        />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.black,
    paddingTop: 50,
  },
  navbar: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
