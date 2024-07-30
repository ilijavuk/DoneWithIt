import { Modal, View } from "react-native";
import uploadScreenStyles from "./UploadScreen.styles";
import LottieView from "lottie-react-native";
import ProgressBar from "react-native-progress/Bar";

const UploadScreen = ({ progress, onDone }) => {
  return (
    <Modal visible={progress !== null} animationType="slide">
      {progress !== 1 ? (
        <View style={uploadScreenStyles.container}>
          <ProgressBar progress={progress} width={200} />
        </View>
      ) : (
        <LottieView
          autoPlay
          loop={false}
          onAnimationFinish={onDone}
          source={require("../../assets/animations/done.json")}
          style={{
            width: "50%",
            alignSelf: "center",
            flex: 1,
          }}
        />
      )}
    </Modal>
  );
};

export default UploadScreen;
