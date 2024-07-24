import { Text } from "react-native";
import defaultStyles from "app/config/styles";

export default function AppText({ children }) {
  return <Text style={defaultStyles.text}>{children}</Text>;
}
