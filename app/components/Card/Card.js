import { Text, View } from "react-native";
import React from "react";
import cardStyles from "./Card.styles";
import { Image } from "react-native-expo-image-cache";

const Card = ({ title, subtitle, imageUrl, thumbnailUrl }) => {
  return (
    <View style={cardStyles.card}>
      <Image
        uri={imageUrl}
        alt={title}
        style={cardStyles.image}
        preview={thumbnailUrl}
        tint="light"
      />
      <View style={cardStyles.body}>
        <Text style={cardStyles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={cardStyles.subtitle} numberOfLines={1}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default Card;
