import { Image, ImageBackground, Text, View } from "react-native";
import welcomeScreenStyles from "./WelcomeScreen.styles";
import Routes from "../../navigation/routes";
import Button from "../../components/Button";
import colors from "../../config/colors";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={welcomeScreenStyles.background}
      source={require("../../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={welcomeScreenStyles.logoWrapper}>
        <Image
          style={welcomeScreenStyles.logo}
          source={require("../../assets/logo-red.png")}
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
