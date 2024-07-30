import { SafeAreaView } from "react-native";
import screenStyles from "./Screen.styles";
import OfflineNotice from "../OfflineNotice";
import React from "react";

const Screen = ({ children, backgroundColor }) => {
  const getBackgroundColor = () => {
    if (backgroundColor) return backgroundColor;
    return screenStyles.screen;
  };

  return (
    <SafeAreaView
      style={{ ...screenStyles.screen, backgroundColor: getBackgroundColor() }}
    >
      <OfflineNotice />
      {children}
    </SafeAreaView>
  );
};

export default Screen;
