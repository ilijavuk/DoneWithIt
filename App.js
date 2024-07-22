import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

export default function App() {
  console.log("app executed");

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title={"Click Me"}
        onPress={() => console.log("Button clicked")}
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
