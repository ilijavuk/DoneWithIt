import { View } from "react-native";
import appFormFieldStyles from "../../components/AppFormField/AppFormField.styles";
import AppTextInput from "../../components/AppTextInput";
import ErrorMessage from "../../components/ErrorMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...otherProps }) => {
  const { handleChange, values, errors, setFieldTouched, touched } =
    useFormikContext();

  return (
    <View style={appFormFieldStyles.container}>
      <AppTextInput
        value={values[name]}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage message={errors[name]} isVisible={touched[name]} />
    </View>
  );
};

export default AppFormField;
