import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";

const CrearScreen = ({ navigation }) => {
  console.log('CrearScreen')
  return (
    <View style={styles.container}>
      <Text style={styles.boton}>En desarrollo</Text>
    </View>
  );
};

export default CrearScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.claro,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  boton: {
    backgroundColor: colors.principal,
    height: 70,
    marginBottom: 100,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  textoBoton: {
    fontFamily: "Nunito",
    fontSize: 20,
    color: colors.claro,
  },
});


