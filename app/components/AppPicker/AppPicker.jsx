import { FlatList, Modal, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import appPickerStyles from "../../components/AppPicker/AppPicker.styles";
import { useState } from "react";
import Button from "../../components/Button";
import Screen from "../../components/Screen";
import PickerItem from "../PickerItem";

const AppPicker = ({
  icon,
  items,
  placeholder,
  value,
  onSelectItem,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={appPickerStyles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={appPickerStyles.icon}
            />
          )}
          <AppText
            style={[
              appPickerStyles.text,
              {
                flex: 1,
                color: value ? colors.dark : colors.medium,
              },
            ]}
          >
            {value || placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button
            text="Close"
            color={colors.secondary}
            onPress={() => setModalVisible(false)}
          />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;
