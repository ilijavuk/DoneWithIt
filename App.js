import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState("");
  return (
    <GestureHandlerRootView>
      <Screen backgroundColor={colors.white}>
        <ImageInput
          imageUri={imageUri}
          onChangeImage={(newImageUri) => setImageUri(newImageUri)}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
