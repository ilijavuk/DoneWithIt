import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import ListItem from "app/components/ListItem";
import listingDetailsScreenStyles from "./ListingDetailsScreen.styles";
import { Image } from "react-native-expo-image-cache";
import { Formik } from "formik";
import messagesApi from "../../api/messages";
import * as Yup from "yup";
import AppFormField from "../../components/AppFormField";
import Button from "../../components/Button";
import colors from "../../config/colors";
import * as Notifications from "expo-notifications";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  const [error, setError] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    Keyboard.dismiss();
    const result = await messagesApi.createMessage(values.message, listing.id);
    console.log("result", listing, result.data);
    if (!result.ok) {
      setError(result.data?.error);
      return;
    }
    setError("");
    resetForm();
    await Notifications.scheduleNotificationAsync({
      title: "Message sent successfully!",
      body: "Your message was sent to the owner.",
      trigger: null,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      style={listingDetailsScreenStyles.container}
    >
      <Image
        style={listingDetailsScreenStyles.image}
        uri={listing.images[0].url}
        preview={listing.images[0].thumbnailUrl}
        tint="light"
      />
      <View style={listingDetailsScreenStyles.body}>
        <Text style={listingDetailsScreenStyles.title}>{listing.title}</Text>
        <Text style={listingDetailsScreenStyles.subtitle}>
          ${listing.price}
        </Text>
      </View>
      <ListItem
        image={require("app/assets/mosh.jpg")}
        title="Mosh Hamedani"
        subtitle="5 Listings"
        onPress={() => console.log("Message Seller")}
      />

      <Formik
        initialValues={{ message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <View style={listingDetailsScreenStyles.form}>
          <AppFormField
            name="message"
            placeholder="Message..."
            autoCapitalize="none"
            autoCorrect={false}
            icon="message"
          />
          <Button type="submit" color={colors.primary} text="Contact seller" />
        </View>
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default ListingDetailsScreen;
