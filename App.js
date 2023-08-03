import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import { useEffect } from "react";
import { UserProvider } from "./state/UserContext";
import { Compose } from "./screens";
import RegistrationScreen from "./screens/RegistrationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Louis_George_Cafe.ttf"),
    light: require("./assets/fonts/Louis_George_Cafe_Light.ttf"),
    bold: require("./assets/fonts/Louis_George_Cafe_Bold.ttf"),
    italic: require("./assets/fonts/Louis_George_Cafe_Italic.ttf"),
    boldItalic: require("./assets/fonts/Louis_George_Cafe_Bold_Italic.ttf"),
    lightItalic: require("./assets/fonts/Louis_George_Cafe_Light_Italic.ttf"),
    BluuNextTitling: require("./assets/fonts/BluuNext-Titling.otf"),
  });

  useEffect(() => {
    const onLayoutRootView = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    onLayoutRootView();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={RegistrationScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Compose" component={Compose} />
            </>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    color: "red",
    marginRight: 10,
    fontSize: 18,
  },
});
