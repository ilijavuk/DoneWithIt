import React from "react";
import { Image, Text, View } from "react-native";
import ListItem from "app/components/ListItem";
import listingDetailsScreenStyles from "./ListingDetailsScreen.styles";
import { useRoute } from "@react-navigation/native";

const ListingDetailsScreen = ({}) => {
  const { params } = useRoute();

  return (
    <View style={listingDetailsScreenStyles.container}>
      <Image style={listingDetailsScreenStyles.image} source={params.image} />
      <View style={listingDetailsScreenStyles.body}>
        <Text style={listingDetailsScreenStyles.title}>{params.title}</Text>
        <Text style={listingDetailsScreenStyles.subtitle}>${params.price}</Text>
      </View>
      <ListItem
        image={require("app/assets/mosh.jpg")}
        title="Mosh Hamedani"
        subtitle="5 Listings"
        onPress={() => console.log("Message Seller")}
      />
    </View>
  );
};

export default ListingDetailsScreen;
