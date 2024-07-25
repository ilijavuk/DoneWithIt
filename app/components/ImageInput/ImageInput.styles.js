import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const imageInputStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    height: 100,
    width: 100,
    borderRadius: 15,
    overflow: "hidden",
  },
  addImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    alignSelf: "flex-start",
  },
});

export default imageInputStyles;
