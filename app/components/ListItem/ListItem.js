import { Image, Text, View } from "react-native";
import React from "react";
import listItemStyles from "./ListItem.styles";

const ListItem = ({ image, title, subtitle }) => {
  return (
    <View style={listItemStyles.listItem}>
      <Image
        style={listItemStyles.avatarImage}
        source={image}
        resizeMode="contain"
      />
      <View style={listItemStyles.listItemInfo}>
        <Text style={listItemStyles.title}>{title}</Text>
        <Text style={listItemStyles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default ListItem;
