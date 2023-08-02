// This screen handles both login and registration

import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../constants";
import useUser from "../hook/useUser"; // Notice the curly braces here
import BottomTabNavigation from "../navigation/BottomTabNavigation";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { userAuthenticated, setUserAuthenticated } = useUser(); // Get the setUserAuthenticated function from UserContext

  const [email, setEmail] = useState("bow@hotmail.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = async () => {
    try {
      // Your server URL and login credentials
      const serverUrl = "http://192.168.0.82:3000/api/users/login";
      const credentials = { email, password };

      // ... Rest of the handleLogin function ...
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      // Parse the response as JSON
      const data = await response.json();

      // If the login was successful, the server should return a JWT token in the response
      const { token, user } = data;

      // Save the JWT token and user data to the local storage for further use
      // For example, using AsyncStorage in React Native:
      // console.log("Token:", token);

      await AsyncStorage.setItem("auth_token", token);

      // If the login was successful, set the userAuthenticated state to true
      setUserAuthenticated(true);

      // console.log("JWT Token:", token);
      // console.log("User Data:", user);
    } catch (error) {
      console.error("Error logging in:", error);
      Alert.alert(
        "Error",
        "Failed to log in. Please check your credentials and try again."
      );
    }
  };

  const handlePage = () => {
    // Navigate to the Register screen
    navigation.navigate("Register");
  };

  if (userAuthenticated) {
    return <BottomTabNavigation />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handlePage}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.offwhite,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
});

export default LoginScreen;
