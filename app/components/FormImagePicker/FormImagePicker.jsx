import { View } from "react-native";
import formImagePickerStyles from "./FormImagePicker.styles";
import { useFormikContext } from "formik";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "../ErrorMessage";

const FormImagePicker = ({ name }) => {
  const { values, touched, errors, setFieldTouched, setFieldValue } =
    useFormikContext();

  return (
    <View style={formImagePickerStyles.container}>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={(uri) => {
          setFieldValue(name, [...values[name], uri]);
        }}
        onRemoveImage={(imageIndex) => {
          setFieldValue(
            name,
            values[name].filter((_image, index) => index !== imageIndex),
          );
          setFieldTouched(name);
        }}
      />
      <ErrorMessage message={errors[name]} isVisible={touched[name]} />
    </View>
  );
};

export default FormImagePicker;
