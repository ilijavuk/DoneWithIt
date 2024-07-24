import { Image, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import listItemStyles from "./ListItem.styles";
import colors from "../../config/colors";
import { Swipeable } from "react-native-gesture-handler";

const ListItem = ({
  image,
  IconComponent,
  title,
  subtitle,
  onPress,
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
            <Text style={listItemStyles.title}>{title}</Text>
            {subtitle && (
              <Text style={listItemStyles.subtitle}>{subtitle}</Text>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;
