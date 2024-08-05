import AppText from "../../components/AppText";
import { TouchableOpacity } from "react-native";
import pickerItemStyles from "../../components/PickerItem/PickerItem.styles";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={pickerItemStyles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;
