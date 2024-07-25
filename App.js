import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import Screen from "./app/components/Screen";
import Button from "./app/components/Button";
import colors from "./app/config/colors";
import { Image } from "react-native";

export default function App() {
  const [imageUri, setImageUri] = useState("");

  const requestPermission = async () => {
    const { granted: grantedCamera } =
      await ImagePicker.requestCameraPermissionsAsync();
    if (!grantedCamera)
      alert("You need to enable permission to access the camera.");
    const { granted: grantedLibrary } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!grantedLibrary)
      alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.assets[0].uri);
      console.log(result.assets[0].uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <GestureHandlerRootView>
      <Screen backgroundColor={colors.yellow}>
        <Button
          color={colors.primary}
          text="Select Image"
          onPress={selectImage}
        />
        {imageUri && (
          <Image source={{ uri: imageUri, width: 200, height: 200 }} />
        )}
      </Screen>
    </GestureHandlerRootView>
  );
}
