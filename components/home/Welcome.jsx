import React from "react";
import { View, Text } from "react-native";
import styles from "./welcome.style";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTxt("red")}>Welcome to DebtCheq</Text>
      <Text style={styles.welcomeTxt("red")}>Send cheques not debits</Text>
    </View>
  );
};

export { Welcome };
