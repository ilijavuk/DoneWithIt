import { View } from "react-native";
import appFormPickerStyles from "../../components/AppFormPicker/AppFormPicker.styles";
import ErrorMessage from "../../components/ErrorMessage";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";

const AppFormPicker = ({
  items,
  name,
  icon,
  placeholder,
  PickerItemComponent,
  ...otherProps
}) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  return (
    <View style={appFormPickerStyles.container}>
      <AppPicker
        icon={icon}
        items={items}
        placeholder={placeholder}
        value={values[name]}
        onSelectItem={(item) => {
          setFieldValue(name, item.value);
        }}
        PickerItemComponent={PickerItemComponent}
        {...otherProps}
      />
      <ErrorMessage message={errors[name]} isVisible={touched[name]} />
    </View>
  );
};

export default AppFormPicker;
