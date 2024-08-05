import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const appTextInputStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingTop: 0,
  },
});

export default appTextInputStyles;
