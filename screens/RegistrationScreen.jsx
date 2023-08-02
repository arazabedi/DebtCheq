import React, { useState } from "react";
import { Alert } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import LoginScreen from "./LoginScreen";
import useUser from "../hook/useUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userAuthenticated, setUserAuthenticated } = useUser();

  const handleRegister = async () => {
    try {
      const serverUrl = "http://192.168.0.82:3000/api/users/register";
      const credentials = { firstName, lastName, email, password };

      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      // Parse the response as JSON
      const data = await response.json();
      const status = await response.status;

      if (status === 409) {
        Alert.alert("Email: " + email + " is already in use.");
      } else if (status === 201) {
        Alert.alert(
          "Thanks " + firstName + "! You've succesfully registered at DebtCheq!"
        );
        // setFirstName("");
        // setLastName("")
        // setEmail("");
        // setPassword("");

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
      }
    } catch (error) {
      console.log("error: " + error);
      console.error("Error trying to register:", error);
      Alert.alert("Error", "Failed to register. Please try again.");
    }
  };

  const navigation = useNavigation();
  const handlePage = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginLink} onPress={handlePage}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginLink: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default RegistrationScreen;
