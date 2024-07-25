import AppText from "../AppText";
import { TouchableOpacity } from "react-native";
import Icon from "../Icon/Icon";
import categoryPickerItemStyles from "./CategoryPickerItem.styles";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={categoryPickerItemStyles.container}
    >
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={categoryPickerItemStyles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;
