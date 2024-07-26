import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const imageInputListStyles = StyleSheet.create({
  container: {
    gap: 10,
  },
  imagesContainer: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: colors.light,
    flex: 0,
  },
  addImage: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    alignSelf: "flex-start",
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default imageInputListStyles;
