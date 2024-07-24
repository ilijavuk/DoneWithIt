import { StyleSheet } from "react-native";
import colors from "app/config/colors";

const appTextInputStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default appTextInputStyles;
