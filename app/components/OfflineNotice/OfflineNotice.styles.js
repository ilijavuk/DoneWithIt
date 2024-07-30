import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const offlineNoticeStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  text: {
    color: colors.white,
  },
});

export default offlineNoticeStyles;
