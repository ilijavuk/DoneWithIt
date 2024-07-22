import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.red}></View>
        <View style={styles.teal}></View>
      </View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  navbar: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  red: {
    aspectRatio: 1,
    backgroundColor: colors.primary,
  },
  teal: {
    aspectRatio: 1,
    backgroundColor: colors.secondary,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
