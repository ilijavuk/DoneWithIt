import { FlatList } from "react-native";
import ListItem from "app/components/ListItem";
import ListItemSeparator from "app/components/ListItemSeparator";
import ListItemDeleteAction from "app/components/ListItemDeleteAction";
import { useState } from "react";
import Screen from "app/components/Screen";

const rawMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("app/assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("app/assets/mosh.jpg"),
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fermentum nulla. Suspendisse potenti. Etiam viverra mattis ligula, eget tincidunt libero iaculis eget. Maecenas auctor lacus quam, eu commodo metus malesuada sed. Suspendisse nec commodo turpis. Mauris vitae diam dapibus, ultrices justo ac, mollis felis. Cras consectetur mi sit amet mattis sagittis. Sed eu nibh quam. Integer sagittis fringilla justo sit amet pulvinar. Vestibulum aliquam luctus est, sed tincidunt odio convallis id. Pellentesque placerat ut augue a euismod. Mauris nisi purus, laoreet euismod viverra ac, rutrum volutpat nunc. Quisque placerat ac odio vitae molestie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fermentum nulla. Suspendisse potenti. Etiam viverra mattis ligula, eget tincidunt libero iaculis eget. Maecenas auctor lacus quam, eu commodo metus malesuada sed. Suspendisse nec commodo turpis. Mauris vitae diam dapibus, ultrices justo ac, mollis felis. Cras consectetur mi sit amet mattis sagittis. Sed eu nibh quam. Integer sagittis fringilla justo sit amet pulvinar. Vestibulum aliquam luctus est, sed tincidunt odio convallis id. Pellentesque placerat ut augue a euismod. Mauris nisi purus, laoreet euismod viverra ac, rutrum volutpat nunc. Quisque placerat ac odio vitae molestie",
    image: require("app/assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(rawMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (clickedMessage) => {
    setMessages(messages.filter((message) => message.id !== clickedMessage.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("app/assets/mosh.jpg"),
            },
          ]);
          setRefreshing(false);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
