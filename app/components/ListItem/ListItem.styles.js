import { Platform, StyleSheet } from "react-native";
import colors from "../../config/colors";

const listItemStyles = StyleSheet.create({
  listItem: {
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 15,
  },
  avatarImage: {
    width: 70,
    aspectRatio: 1,
    borderRadius: 35,
  },
  listItemInfo: {
    marginLeft: 10,
    justifyContent: "center",
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
