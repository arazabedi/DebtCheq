import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import { useEffect } from "react";
import { handleLogout } from "./utils/authUtils";
import { UserProvider } from "./state/UserContext";
import useUser from "./hook/useUser";

const Stack = createNativeStackNavigator();

export default function App() {
  const { userAuthenticated } = useUser();
  console.log(userAuthenticated);

  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Louis_George_Cafe.ttf"),
    light: require("./assets/fonts/Louis_George_Cafe_Light.ttf"),
    bold: require("./assets/fonts/Louis_George_Cafe_Bold.ttf"),
    italic: require("./assets/fonts/Louis_George_Cafe_Italic.ttf"),
    boldItalic: require("./assets/fonts/Louis_George_Cafe_Bold_Italic.ttf"),
    lightItalic: require("./assets/fonts/Louis_George_Cafe_Light_Italic.ttf"),
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
            {userAuthenticated ? (
              <Stack.Screen
                name="Bottom Navigation"
                component={BottomTabNavigation}
                options={{
                  headerRight: () => (
                    <TouchableOpacity onPress={handleLogout}>
                      <Text style={styles.logoutButton}>Log Out</Text>
                    </TouchableOpacity>
                  ),
                  headerShown: false,
                }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Registration"
                  component={RegistrationScreen}
                  options={{ headerShown: false }}
                />
              </>
            )}
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
