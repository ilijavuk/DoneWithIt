import { Text, TouchableOpacity } from "react-native";
import buttonStyles from "./Button.styles";
import { useFormikContext } from "formik";

const Button = ({ style, type, text, onPress, color }) => {
  const formikContext = type === "submit" ? useFormikContext() : null;

  const getOnPress = () => {
    if (type === "submit" && formikContext) return formikContext.handleSubmit;
    return onPress;
  };

  return (
    <TouchableOpacity
      style={{ ...buttonStyles.button, backgroundColor: color, ...style }}
      onPress={getOnPress()}
    >
      <Text style={buttonStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
