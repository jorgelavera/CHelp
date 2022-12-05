import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../constants/colors";

import HomeScreen from "../screens/HomeScreen";
import LanzarScreen from "../screens/LanzarScreen";
import ConfiguracionScreen from "../screens/ConfiguracionScreen";
import AdministrarScreen from "../screens/AdministrarScreen";
import EnDesarrolloScreen from "../screens/EnDesarrolloScreen";

const Stack = createNativeStackNavigator();

export default CHelpNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: { backgroundColor: colors.acento },
          headerTintColor: colors.oscuro,
          headerTitleStyle: { fontWeight: "normal" },
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Inicio" }}/>
        <Stack.Screen name="ConfiguracionScreen" component={ConfiguracionScreen} options={{ title: "Configuración" }} />
        <Stack.Screen name="AdministrarScreen" component={AdministrarScreen} options={{ title: "Administrar Tareas" }} />
        <Stack.Screen name="LanzarScreen" component={LanzarScreen} options={{ title: "Lanzar Tarea" }} />
        <Stack.Screen name="EnDesarrolloScreen" component={EnDesarrolloScreen} options={{ title: "Not yet" }} />
      </Stack.Navigator>
  );
};
