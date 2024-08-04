import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const activityIndicatorStyles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: colors.white,
    opacity: 0.8,
  },
});

export default activityIndicatorStyles;
