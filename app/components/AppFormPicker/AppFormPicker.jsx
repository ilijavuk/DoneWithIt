import { View } from "react-native";
import appFormPickerStyles from "app/components/AppFormPicker/AppFormPicker.styles";
import ErrorMessage from "app/components/ErrorMessage";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";

const AppFormPicker = ({ items, name, icon, placeholder, ...otherProps }) => {
  const { values, setFieldValue, errors, setFieldTouched, touched } =
    useFormikContext();

  return (
    <View style={appFormPickerStyles.container}>
      <AppPicker
        icon={icon}
        items={items}
        placeholder={placeholder}
        value={values[name]}
        onSelectItem={(item) => {
          setFieldValue(name, item.value);
          setFieldTouched(name);
        }}
        {...otherProps}
      />
      <ErrorMessage message={errors[name]} isVisible={touched[name]} />
    </View>
  );
};

export default AppFormPicker;
