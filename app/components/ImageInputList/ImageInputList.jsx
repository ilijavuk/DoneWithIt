import { Alert, ScrollView, TouchableOpacity, View } from "react-native";
import imageInputListStyles from "./ImageInputList.styles";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "../ImageInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import { useRef } from "react";

const ImageInputList = ({ imageUris, onAddImage, onRemoveImage }) => {
  const [libraryPermission, requestLibraryPermission] =
    ImagePicker.useMediaLibraryPermissions();
  // const [cameraPermission, requestCameraPermission] =
  //   ImagePicker.useCameraPermissions();
  const scrollView = useRef();

  const selectImage = async () => {
    if (!libraryPermission) await requestLibraryPermission();

    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        onAddImage(result.assets[0]?.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const triggerDeleteModal = (imageIndex) => {
    Alert.alert("Delete Image", "Are you sure you want to delete this image?", [
      { text: "No" },
      { text: "Yes", onPress: () => onRemoveImage(imageIndex) },
    ]);
  };

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
        contentContainerStyle={imageInputListStyles.container}
      >
        {imageUris?.length !== 0 && (
          <View style={imageInputListStyles.imagesContainer}>
            {imageUris.map((uri, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => triggerDeleteModal(index)}
              >
                <ImageInput imageUri={uri} />
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TouchableOpacity
          style={imageInputListStyles.addImage}
          onPress={selectImage}
        >
          <MaterialCommunityIcons
            name="camera"
            size={45}
            color={colors.medium}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;
