import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

const Friends = () => {
  const [friend, setFriend] = useState();
  const userId = "123"; // Replace with the logged-in user's ID
  const friendId = "456"; // Replace with the selected friend's ID

  const checkAuthentication = async () => {
    try {
      const token = await AsyncStorage.getItem("auth_token");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.sub; // Assuming the user ID is stored in the 'sub' field
    } catch (error) {
      console.log(error);
    }

    const addFriend = async (userId, friendId) => {
      try {
        const response = await fetch(
          `/api/users/${userId}/add-friend/${friendId}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`, // Replace with the actual access token
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          // Handle success and update local friend list
          console.log("Friend added successfully");
        } else {
          // Handle errors
          console.error("Failed to add friend");
        }
      } catch (error) {
        console.error("Error adding friend:", error);
        // Handle network errors
      }
    };

    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => addFriend(userId, friendId)}>
          <Text>Add Friend</Text>
        </TouchableOpacity>
        {/* Display list of friends */}
        {/* You can map over the list of friends and display them here */}
        {/* Example: */}
        <View style={styles.friendList}>
          <Text>Friend 1</Text>
          <Text>Friend 2</Text>
          {/* Add more friends */}
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    friendList: {
      marginTop: 20,
      padding: 10,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 5,
    },
  });
};

export { Friends };
