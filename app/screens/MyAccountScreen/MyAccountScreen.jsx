import Screen from "app/components/Screen";
import ListItem from "app/components/ListItem";
import colors from "app/config/colors";
import { FlatList, View } from "react-native";
import myAccountScreenStyles from "app/screens/MyAccountScreen/MyAccountScreen.styles";
import Icon from "app/components/Icon/Icon";

const menuitems = [
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
  },
];

const MyAccountScreen = () => {
  return (
    <Screen backgroundColor={colors.grey}>
      <ListItem
        image={require("app/assets/mosh.jpg")}
        title="Mosh Hamedani"
        subtitle="programmingwithmosh@gmail.com"
      />
      <View style={myAccountScreenStyles.actionsContainer}>
        <FlatList
          data={menuitems}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              title={item.title}
            />
          )}
          keyExtractor={(menuItem) => menuItem.title}
        />
      </View>
      <ListItem
        ImageComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
        title="Log Out"
      />
    </Screen>
  );
};

export default MyAccountScreen;
