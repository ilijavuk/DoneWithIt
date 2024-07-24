import { SafeAreaView } from "react-native";
import screenStyles from "./Screen.styles";

const Screen = ({ children, backgroundColor }) => {
  const getBackgroundColor = () => {
    if (backgroundColor) return backgroundColor;
    return screenStyles.screen;
  };

  return (
    <SafeAreaView
      style={{ ...screenStyles.screen, backgroundColor: getBackgroundColor() }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Screen;
