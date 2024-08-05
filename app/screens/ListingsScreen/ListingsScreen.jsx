import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Screen from "app/components/Screen";
import colors from "app/config/colors";
import Button from "../../components/Button";
import ActivityIndicator from "../../components/ActivityIndicator";
import Card from "../../components/Card";
import listingsScreenStyles from "./ListingsScreen.styles";
import Routes from "../../navigation/routes";
import useApi from "../../hooks/useApi";
import listingsApi from "../../api/listings";
import { useEffect } from "react";

const ListingsScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    isLoading,
    fetch: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator isVisible={isLoading} />

      <Screen backgroundColor={colors.grey}>
        {error && (
          <View>
            <Text>Couldn't retrieve the listings.</Text>
            <Button
              text="Retry"
              onPress={loadListings}
              color={colors.primary}
            />
          </View>
        )}
        <FlatList
          style={listingsScreenStyles.screen}
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Routes.LISTING_DETAILS, {
                  id: item.id,
                  title: item.title,
                  price: item.price,
                  images: item.images,
                })
              }
            >
              <Card
                title={item.title}
                subtitle={"$" + item.price}
                imageUrl={item.images[0].url}
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </Screen>
    </>
  );
};

export default ListingsScreen;
