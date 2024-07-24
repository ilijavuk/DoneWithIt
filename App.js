import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import AppTextInput from "app/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    console.log(firstName);
  }, [firstName]);

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <AppTextInput
          icon="email"
          inputProps={{
            placeholder: "This is a placeholder",
            onChangeText: setFirstName,
          }}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
