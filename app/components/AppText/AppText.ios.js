import { Text } from "react-native";
import defaultStyles from "app/config/styles";

export default function AppText({ style, children }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}
