import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import CHelpNavigator from "./CHelpNavigator";
import LanzarScreen from "../screens/LanzarScreen";
import colors from "../constants/colors";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <BottomTabs.Screen
          name="Home"
          component={CHelpNavigator}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <Ionicons name="home" size={20} color='black'/>
                <Text>Inicio</Text>
              </View>
            ),
          }}
        />
        <BottomTabs.Screen
          name="LanzarScreen"
          component={LanzarScreen}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <MaterialCommunityIcons name="rocket-launch-outline" size={24} color="black" />
                <Text>Lanzar Tarea</Text>
              </View>
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
    backgroundColor: colors.acento,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});