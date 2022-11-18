import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ImageBackground, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "./src/components/BottomSheet";
import CustomButton from "./src/components/CustomButton";

export default function App() {
  const localImage = require("./assets/background.jpg");
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground source={localImage} style={styles.container}>
        <StatusBar style="auto" />
      </ImageBackground>
      <BottomSheet />
      <CustomButton />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    textAlign: "center",
  },
});
