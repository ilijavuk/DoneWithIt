import { Platform, StyleSheet } from "react-native";
import colors from "../../config/colors";

const listItemStyles = StyleSheet.create({
  listItem: {
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 20,
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  listItemInfo: {
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  title: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    fontWeight: "500",
  },
  subtitle: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "500",
    color: colors.medium,
  },
});

export default listItemStyles;
