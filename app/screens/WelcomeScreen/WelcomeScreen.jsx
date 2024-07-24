import { Image, ImageBackground, Text, View } from "react-native";
import Button from "app/components/Button";
import welcomeScreenStyles from "./WelcomeScreen.styles";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={welcomeScreenStyles.background}
      source={require("app/assets/background.jpg")}
      blurRadius={10}
    >
      <View style={welcomeScreenStyles.logoWrapper}>
        <Image
          style={welcomeScreenStyles.logo}
          source={require("app/assets/logo-red.png")}
        />
        <Text style={welcomeScreenStyles.tagline}>
          Sell what you don't need
        </Text>
      </View>
      <View style={welcomeScreenStyles.buttonWrapper}>
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
