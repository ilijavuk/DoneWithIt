import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.body}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.subtitle}>$100</Text>
      </View>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subtitle="5 Listings"
        onPress={() => console.log("Message Seller")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 300,
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;
