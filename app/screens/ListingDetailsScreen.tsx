import React from "react";
import Card from "../components/Card";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

const ListingDetailsScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Card
        title="Red jacket for sale!"
        subtitle="$100"
        image={require("../assets/jacket.jpg")}
      />
      <View style={styles.avatarWrapper}>
        <Image
          style={styles.avatarImage}
          source={require("../assets/mosh.jpg")}
          resizeMode="contain"
        />
        <View style={styles.avatarInfo}>
          <Text style={styles.avatarName}>Mosh Hamedani</Text>
          <Text style={styles.numberOfListings}>5 Listings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
  },
  avatarWrapper: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 20,
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  avatarInfo: {
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  avatarName: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    fontWeight: "500",
  },
  numberOfListings: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "500",
    color: "gray",
  },
});

export default ListingDetailsScreen;
