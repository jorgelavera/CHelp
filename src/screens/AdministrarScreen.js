import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";

const AdministrarScreen = ({ navigation }) => {
  console.log('AdministrarScreen')
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("EnDesarrolloScreen")} > 
        <View>
          <Text style={styles.textoBoton}>CREAR TAREA</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("EnDesarrolloScreen")} > 
        <View>
          <Text  style={styles.textoBoton}>CAMBIAR TAREAS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("EnDesarrolloScreen")} > 
        <View>
          <Text style={styles.textoBoton}>BORRAR TAREA</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AdministrarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.claro,
    alignItems: "center",
    justifyContent: "center",
  },
  boton: {
    backgroundColor: colors.principal,
    height: 70,
    marginBottom: 50,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  textoBoton: {
    fontFamily: "Nunito",
    fontSize: 20,
    color: colors.oscuro,
  },
});


