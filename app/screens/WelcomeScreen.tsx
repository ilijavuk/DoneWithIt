import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          text="Login"
          onPress={() => console.log("Login")}
          color="primary"
        />
        <Button
          text="Register"
          onPress={() => console.log("Register")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  logoWrapper: {
    paddingTop: 70,
    alignItems: "center",
    width: "100%",
    aspectRatio: 1,
  },
  logo: {
    height: 100,
    width: 100,
  },
  tagline: {
    color: colors.black,
    fontSize: 25,
    fontWeight: "600",
    marginTop: 20,
  },
  buttonWrapper: {
    gap: 15,
    padding: 20,
  },
});
