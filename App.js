import { useFonts } from "expo-font";
import CHelpNavigator from "./src/navigation/CHelpNavigator";

export default function App() {
  const [loaded] = useFonts({
    Nunito: require("./src/fonts/Nunito-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
      <CHelpNavigator />
  );
}

