import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableOpacityComponent,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  let x = 1;
  console.log("app executed");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <Image source={require("./assets/favicon.png")} />
      <TouchableHighlight
        onPress={() => console.log("Image tapped")}
        onLongPress={() => console.log("Image long pressed")}
      >
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
