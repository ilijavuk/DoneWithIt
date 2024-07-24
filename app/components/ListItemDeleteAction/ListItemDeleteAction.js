import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback, View } from "react-native";
import colors from "../../config/colors";
import listItemDeleteActionStyles from "./ListItem.styles";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={listItemDeleteActionStyles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;
