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
            onPress={() => console.log("Message Sellected", item)}
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
