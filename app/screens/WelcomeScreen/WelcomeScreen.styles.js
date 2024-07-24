import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const welcomeScreenStyles = StyleSheet.create({
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

export default welcomeScreenStyles;
