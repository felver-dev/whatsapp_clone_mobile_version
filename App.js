import "react-native-gesture-handler";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Navigation from "./navigation/Navigation";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    regular: require("./assets/fonts/PT_Sans/PTSans-Regular.ttf"),
    bold: require("./assets/fonts/PT_Sans/PTSans-Bold.ttf"),
    italic: require("./assets/fonts/PT_Sans/PTSans-Italic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <>
      <StatusBar style="light"  backgroundColor="#232D36"/>
      <Navigation />
    </>
  );
};

export default App;
