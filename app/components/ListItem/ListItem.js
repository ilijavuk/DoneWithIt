import { Image, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import listItemStyles from "./ListItem.styles";
import colors from "../../config/colors";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  image,
  IconComponent,
  title,
  subtitle,
  onPress,
  isChevronsShown = true,
  renderRightActions = () => {},
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={listItemStyles.listItem}>
          {IconComponent}
          {image && (
            <Image
              style={listItemStyles.avatarImage}
              source={image}
              resizeMode="contain"
            />
          )}
          <View style={listItemStyles.listItemInfo}>
            <Text style={listItemStyles.title} numberOfLines={1}>
              {title}
            </Text>
            {subtitle && (
              <Text style={listItemStyles.subtitle} numberOfLines={1}>
                {subtitle}
              </Text>
            )}
          </View>
          {isChevronsShown && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={colors.medium}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;
