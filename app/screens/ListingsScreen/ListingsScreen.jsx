import Card from "app/components/Card";
import { FlatList, View } from "react-native";
import Screen from "app/components/Screen";
import listingsScreenStyles from "app/screens/ListingsScreen/ListingsScreen.styles";
import colors from "app/config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    images: [{ url: require("../../assets/jacket.jpg") }],
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    images: [{ url: require("../..//assets/couch.jpg") }],
  },
];

const ListingsScreen = () => {
  return (
    <Screen backgroundColor={colors.grey}>
      <FlatList
        style={listingsScreenStyles.screen}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.images[0].url}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </Screen>
  );
};

export default ListingsScreen;
