import LottieView from "lottie-react-native";
import { View } from "react-native";
import activityIndicatorStyles from "./ActivityIndicator.styles";

const ActivityIndicator = ({ isVisible = false }) => {
  if (!isVisible) return null;

  return (
    <View style={activityIndicatorStyles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../../assets/animations/loader.json")}
        style={{
          flex: 1,
        }}
      ></LottieView>
    </View>
  );
};

export default ActivityIndicator;
