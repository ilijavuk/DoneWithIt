import { Image, TouchableOpacity, View } from "react-native";
import imageInputStyles from "./ImageInput.styles";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const [libraryPermission, requestLibraryPermission] =
    ImagePicker.useMediaLibraryPermissions();

  const selectImage = async () => {
    if (!libraryPermission) await requestLibraryPermission();

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) onChangeImage(result.assets[0].uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <View style={imageInputStyles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri, height: 100, width: 100 }} />
      ) : (
        <TouchableOpacity
          style={imageInputStyles.addImage}
          onPress={selectImage}
        >
          <MaterialCommunityIcons
            name={"camera"}
            size={50}
            color={colors.medium}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImageInput;
