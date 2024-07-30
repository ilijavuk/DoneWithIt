import React from "react";
import { Text, View } from "react-native";
import ListItem from "app/components/ListItem";
import listingDetailsScreenStyles from "./ListingDetailsScreen.styles";
import { Image } from "react-native-expo-image-cache";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  console.log(listing);

  return (
    <View style={listingDetailsScreenStyles.container}>
      <Image
        style={listingDetailsScreenStyles.image}
        uri={listing.images[0].url}
        preview={listing.images[0].thumbnailUrl}
        tint="light"
      />
      <View style={listingDetailsScreenStyles.body}>
        <Text style={listingDetailsScreenStyles.title}>{listing.title}</Text>
        <Text style={listingDetailsScreenStyles.subtitle}>
          ${listing.price}
        </Text>
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
