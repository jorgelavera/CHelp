import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./src/components/Header";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Nunito: require("./src/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header
        title={"Well"}
        newStyles={{ fontFamily: "Nunito" }}
      />
      <MainMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
  },
});