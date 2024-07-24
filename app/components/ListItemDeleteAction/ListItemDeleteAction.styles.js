import colors from "../../config/colors";
import { StyleSheet } from "react-native";

const listItemDeleteActionStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    height: "100%",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default listItemDeleteActionStyles;
