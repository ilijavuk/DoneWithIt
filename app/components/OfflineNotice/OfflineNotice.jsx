import { View } from "react-native";
import offlineNoticeStyles from "./OfflineNotice.styles";
import { useNetInfo } from "@react-native-community/netinfo";
import AppText from "../AppText";

const OfflineNotice = (props) => {
  const isInternetReachable = useNetInfo().isInternetReachable;

  if (isInternetReachable === null || isInternetReachable) return null;

  return (
    <View style={offlineNoticeStyles.container}>
      <AppText style={offlineNoticeStyles.text}>No internet connection</AppText>
    </View>
  );
};

export default OfflineNotice;
