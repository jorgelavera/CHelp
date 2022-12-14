import { useFonts } from "expo-font";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { Provider } from "react-redux";
import store from "./src/store";
import { initializeApp } from "firebase/app";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCgP8pzPj5wZARloKQOlVMVbqUiPvQ9Ddg",
    authDomain: "chelp-88f78.firebaseapp.com",
    projectId: "chelp-88f78",
    storageBucket: "chelp-88f78.appspot.com",
    messagingSenderId: "66866005509",
    appId: "1:66866005509:web:befeda848e4b26dcc5fe6c",
    measurementId: "G-4QGG2VV6EB"
  };
  
  const app = initializeApp(firebaseConfig);

  const [fonstLoaded] = useFonts({
    Nunito: require("./src/fonts/Nunito-Regular.ttf"),
  });

  if (!fonstLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  );
}

