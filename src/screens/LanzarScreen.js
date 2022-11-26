import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const LanzarScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.botones}>En desarrollo</Text>
    </View>
  );
};

export default LanzarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.claro,
    alignItems: "center",
    justifyContent: "center",
  },
  botones: {
    backgroundColor: colors.principal,
  },
});