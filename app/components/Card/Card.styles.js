import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  body: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default cardStyles;
