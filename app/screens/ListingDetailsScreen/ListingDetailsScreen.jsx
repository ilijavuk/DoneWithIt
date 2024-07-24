import React from "react";
import { Image, Text, View } from "react-native";
import ListItem from "app/components/ListItem";
import listingDetailsScreenStyles from "./ListingDetailsScreen.styles";

const ListingDetailsScreen = ({}) => {
  return (
    <View style={listingDetailsScreenStyles.container}>
      <Image
        style={listingDetailsScreenStyles.image}
        source={require("app/assets/jacket.jpg")}
      />
      <View style={listingDetailsScreenStyles.body}>
        <Text style={listingDetailsScreenStyles.title}>
          Red jacket for sale
        </Text>
        <Text style={listingDetailsScreenStyles.subtitle}>$100</Text>
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
