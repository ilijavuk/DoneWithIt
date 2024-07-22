import { Alert, Button, SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  console.log("app executed");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={"Click Me"}
        onPress={() =>
          // Alert.alert("My title", "My message", [
          //   {
          //     text: "Yes",
          //     onPress: () => console.log("Yes"),
          //   },
          //   {
          //     text: "No",
          //     onPress: () => console.log("No"),
          //   },
          // ])
          Alert.prompt(
            // iOS only
            "My title",
            "My message",
            (text) => console.log("You entered: " + text),
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
