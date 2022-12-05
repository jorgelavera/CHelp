import { useFonts } from "expo-font";
import CHelpNavigator from "./src/navigation/CHelpNavigator";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
  const [loaded] = useFonts({
    Nunito: require("./src/fonts/Nunito-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <BottomTabNavigator />
  );
}

