import { SafeAreaView } from "react-native";
import screenStyles from "./Screen.styles";

const Screen = ({ children }) => {
  return <SafeAreaView style={screenStyles.screen}>{children}</SafeAreaView>;
};

export default Screen;
