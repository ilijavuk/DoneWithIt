import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const listingDetailsScreenStyles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 300,
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default listingDetailsScreenStyles;
