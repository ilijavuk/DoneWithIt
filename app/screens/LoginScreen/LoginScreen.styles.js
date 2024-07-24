import { StyleSheet } from "react-native";

const loginScreenStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
  form: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
    marginTop: 150,
    gap: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});

export default loginScreenStyles;
