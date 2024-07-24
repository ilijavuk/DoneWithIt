import { Text, TouchableOpacity } from "react-native";
import buttonStyles from "./Button.styles";

const Button = ({ text, onPress, color }) => {
  return (
    <TouchableOpacity
      style={{ ...buttonStyles.button, backgroundColor: color }}
      onPress={onPress}
    >
      <Text style={buttonStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
