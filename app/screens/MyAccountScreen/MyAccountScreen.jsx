import Screen from "../../components/Screen";
import ListItem from "../../components/ListItem";
import colors from "../../config/colors";
import { FlatList, View } from "react-native";
import myAccountScreenStyles from "../../screens/MyAccountScreen/MyAccountScreen.styles";
import Icon from "../../components/Icon/Icon";
import Routes from "../../navigation/routes";
import useAuth from "../../auth/useAuth";

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
  const authContext = useAuth();

  return (
    <Screen backgroundColor={colors.grey}>
      <ListItem
        image={require("../../assets/mosh.jpg")}
        title={authContext.user.name}
        subtitle={authContext.user.email}
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
        onPress={authContext.logout}
      />
    </Screen>
  );
};

export default MyAccountScreen;
