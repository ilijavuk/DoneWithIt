import { View } from "react-native";
import appFormFieldStyles from "app/components/AppFormField/AppFormField.styles";
import AppTextInput from "app/components/AppTextInput";
import ErrorMessage from "app/components/ErrorMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...otherProps }) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

  return (
    <View style={appFormFieldStyles.container}>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage message={errors[name]} isVisible={touched[name]} />
    </View>
  );
};

export default AppFormField;
