import Screen from "app/components/Screen";
import ListItem from "app/components/ListItem";
import colors from "app/config/colors";
import { FlatList, View } from "react-native";
import myAccountScreenStyles from "app/screens/MyAccountScreen/MyAccountScreen.styles";
import Icon from "app/components/Icon/Icon";
import Routes from "../../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: Routes.MESSAGES,
  },
];

const MyAccountScreen = ({ navigation }) => {
  return (
    <Screen backgroundColor={colors.grey}>
      <ListItem
        image={require("app/assets/mosh.jpg")}
        title="Mosh Hamedani"
        subtitle="programmingwithmosh@gmail.com"
      />
      <View style={myAccountScreenStyles.actionsContainer}>
        <FlatList
          data={menuItems}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          keyExtractor={(menuItem) => menuItem.title}
        />
      </View>
      <ListItem
        IconComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
        title="Log Out"
      />
    </Screen>
  );
};

export default MyAccountScreen;
