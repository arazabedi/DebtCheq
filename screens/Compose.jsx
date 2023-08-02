import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // for storing the authentication token
import { useNavigation } from "@react-navigation/native";

const Compose = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleCompose = async () => {
    try {
      // Fetch authentication token from AsyncStorage
      const authToken = await AsyncStorage.getItem("auth_token");

      if (!authToken) {
        Alert.alert("Error", "You need to be logged in to compose a cheque.");
        return;
      }

      const requestBody = {
        title,
        amount,
        description,
        from,
        to,
      };

      const serverUrl = "http://192.168.0.82:3000/api/cheques/";

      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Include the authentication token in the request headers
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        Alert.alert("Success", "Cheque composed successfully!");
        navigation.goBack(); // Navigate back after successful submission
      } else {
        Alert.alert("Error", "Failed to compose cheque. Please try again.");
      }
    } catch (error) {
      console.error("Error composing cheque:", error);
      Alert.alert("Error", "An error occurred. Please try again later.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Compose Cheque</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="From"
          value={from}
          onChangeText={setFrom}
        />
        <TextInput
          style={styles.input}
          placeholder="To"
          value={to}
          onChangeText={setTo}
        />
        <TouchableOpacity style={styles.button} onPress={handleCompose}>
          <Text style={styles.buttonText}>Compose</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export { Compose };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
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
    marginTop: 20,
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
