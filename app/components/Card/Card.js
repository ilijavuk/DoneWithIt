import { Image, Text, View } from "react-native";
import React from "react";
import cardStyles from "./Card.styles";

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={cardStyles.card}>
      <Image source={image} alt={title} style={cardStyles.image} />
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
