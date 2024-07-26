import Card from "app/components/Card";
import { FlatList, TouchableOpacity, View } from "react-native";
import Screen from "app/components/Screen";
import listingsScreenStyles from "app/screens/ListingsScreen/ListingsScreen.styles";
import colors from "app/config/colors";
import Routes from "../../navigation/routes";

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

const ListingsScreen = ({ navigation }) => {
  return (
    <Screen backgroundColor={colors.grey}>
      <FlatList
        style={listingsScreenStyles.screen}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(Routes.LISTING_DETAILS, {
                title: item.title,
                price: item.price,
                image: item.images[0].url,
              })
            }
          >
            <Card
              title={item.title}
              subtitle={"$" + item.price}
              image={item.images[0].url}
            />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </Screen>
  );
};

export default ListingsScreen;
