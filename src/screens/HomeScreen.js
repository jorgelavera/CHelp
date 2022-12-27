import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("ConfiguracionScreen")} > 
        <View>
          <Text style={styles.textoBoton}>CONFIGURACIÓN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("AdministrarScreen")} > 
        <View>
          <Text  style={styles.textoBoton}>ADMINISTRAR TAREAS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("LanzarScreen")} > 
        <View>
          <Text style={styles.textoBoton}>LANZAR TAREA</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

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
    marginBottom: 100,
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


