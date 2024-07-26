import { Image, ImageBackground, Text, View } from "react-native";
import Button from "app/components/Button";
import welcomeScreenStyles from "./WelcomeScreen.styles";
import colors from "app/config/colors";
import Routes from "../../navigation/routes";

export default function WelcomeScreen({ navigation }) {
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
          onPress={() => navigation.navigate(Routes.LOGIN)}
          color={colors.primary}
        />
        <Button
          text="Register"
          onPress={() => navigation.navigate(Routes.REGISTER)}
          color={colors.secondary}
        />
      </View>
    </ImageBackground>
  );
}
