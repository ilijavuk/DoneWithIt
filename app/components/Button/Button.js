import { Text, TouchableOpacity } from "react-native";
import buttonStyles from "./Button.styles";
import colors from "../../config/colors";

const Button = ({ text, onPress, color }) => {
  const getBackgroundColor = () => {
    if (color === "secondary") return colors.secondary;
    return colors.primary;
  };

  return (
    <TouchableOpacity
      style={{ ...buttonStyles.button, backgroundColor: getBackgroundColor() }}
      onPress={onPress}
    >
      <Text style={buttonStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
