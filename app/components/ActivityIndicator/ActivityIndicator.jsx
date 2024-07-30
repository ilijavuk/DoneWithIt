import LottieView from "lottie-react-native";

const ActivityIndicator = ({ isVisible = false }) => {
  if (!isVisible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../../assets/animations/loader.json")}
      style={{
        flex: 1,
      }}
    ></LottieView>
  );
};

export default ActivityIndicator;
