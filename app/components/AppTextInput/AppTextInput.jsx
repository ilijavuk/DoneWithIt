import { TextInput, View } from "react-native";
import appTextInputStyles from "app/components/AppTextInput/AppTextInput.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "app/config/colors";

const AppTextInput = ({ icon, inputProps }) => {
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
      <TextInput style={appTextInputStyles.input} {...inputProps} />
    </View>
  );
};

export default AppTextInput;
