import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logo}>
        <Image
          source={{
            width: 100,
            height: 100,
            uri: require("../assets/logo-red.png"),
          }}
        />
        <Text>Sell what you don't need</Text>
      </View>
      <View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
        {/*<Button*/}
        {/*  title="Login"*/}
        {/*  onPress={() => console.log("Login")}*/}
        {/*  color="primary"*/}
        {/*/>*/}
        {/*<Button*/}
        {/*  title="Register"*/}
        {/*  onPress={() => console.log("Register")}*/}
        {/*  color="secondary"*/}
        {/*/>*/}
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  logo: {
    paddingTop: 70,
    alignItems: "center",
    width: "100%",
    aspectRatio: 1,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
