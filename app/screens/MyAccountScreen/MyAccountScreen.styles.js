import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const myAccountScreenStyles = StyleSheet.create({
  actionsContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  listItem: {
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    gap: 10,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default myAccountScreenStyles;
