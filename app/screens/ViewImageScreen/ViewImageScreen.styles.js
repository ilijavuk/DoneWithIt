import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const viewImageScreenStyles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.black,
    paddingTop: 50,
  },
  navbar: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default viewImageScreenStyles;
