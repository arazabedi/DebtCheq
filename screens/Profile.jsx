import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { handleLogout } from "../utils/authUtils";
import useUser from "../hook/useUser";

const Profile = () => {
  const { userAuthenticated, setUserAuthenticated } = useUser();

  // Create a function that wraps the handleLogout call
  const handleLogoutButtonPress = () => {
    handleLogout(setUserAuthenticated);
  };

  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <TouchableOpacity onPress={handleLogoutButtonPress}>
        <Text style={styles.logoutButton}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    color: "red",
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
});

export { Profile };
