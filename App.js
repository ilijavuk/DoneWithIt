import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import AppPicker from "app/components/AppPicker";
import AppTextInput from "app/components/AppTextInput";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <AppPicker
          items={categories}
          onSelectItem={(item) => setSelectedCategory(item)}
          placeholder="Category"
          value={selectedCategory.label}
          icon="apps"
        />
        <AppTextInput inputProps={{ placeholder: "Email" }} icon="apps" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
