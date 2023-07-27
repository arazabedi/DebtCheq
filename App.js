import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Louis_George_Cafe.ttf"),
    light: require("./assets/fonts/Louis_George_Cafe_Light.ttf"),
    bold: require("./assets/fonts/Louis_George_Cafe_Bold.ttf"),
    italic: require("./assets/fonts/Louis_George_Cafe_Italic.ttf"),
    boldItalic: require("./assets/fonts/Louis_George_Cafe_Bold_Italic.ttf"),
    lightItalic: require("./assets/fonts/Louis_George_Cafe_Light_Italic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"Bottom Navigation"}
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
