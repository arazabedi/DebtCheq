import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RegistrationScreen = () => {
  return (
    <View>
      <Text>Registration Screen</Text>
      {/* Add your registration form here */}
      <TouchableOpacity>
        <Text >Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;
