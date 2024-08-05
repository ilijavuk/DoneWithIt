import { TextInput, View } from "react-native";
import appTextInputStyles from "../../components/AppTextInput/AppTextInput.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

const AppTextInput = ({ icon, ...inputProps }) => {
  return (
    <View style={appTextInputStyles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={appTextInputStyles.icon}
        />
      )}
      <TextInput
        style={[appTextInputStyles.input, defaultStyles.text]}
        {...inputProps}
        placeholderTextColor={colors.medium}
      />
    </View>
  );
};

export default AppTextInput;
