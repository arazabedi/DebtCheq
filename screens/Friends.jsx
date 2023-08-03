import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetchUsers from "../hook/useFetchUsers";
import { Alert } from "react-native";
import useAuthentication from "../hook/useAuthentication";

const Friends = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { users, isLoading, error, refetchUsers } = useFetchUsers();
	const { userId, decodedToken } = useAuthentication();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderUserItem = ({ item }) => (
    <TouchableOpacity onPress={() => addFriend(userId, item._id)}>
      <View style={styles.userItem}>
        <Text style={styles.userName}>
          {item.firstName} {item.lastName}
        </Text>
        <Text>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );

  const addFriend = async (userId, friendId) => {
    try {
      if (!decodedToken) {
        console.error("Decoded token not available.");
        return;
      }

      console.log(userId + "  ---  " + friendId);

      const response = await fetch(
        `http://192.168.0.82:3000/api/users/${userId}/add-friend/${friendId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${decodedToken}`, // Pass the decodedToken
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json(); // Parse response body as JSON

      if (response.ok) {
        // Handle success and update local friend list
        console.log("Friend added successfully");
        Alert.alert(
          "Friend added succesfully"
        );
      } else {
        // Handle errors
        console.log("Response data:", responseData); // Log the response data for debugging
        console.error("Failed to add friend");
      }
    } catch (error) {
      console.error("Error adding friend:", error);
      // Handle network errors
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or email"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item._id}
        renderItem={renderUserItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loadingText: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 16,
  },
  errorText: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 16,
    color: "red",
  },
  userItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { Friends };
