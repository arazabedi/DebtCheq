import React from "react";
import { View, Text } from "react-native";
import UseFetch from "../../hook/useFetch";
import { COLORS, SIZES } from "../../constants";
import styles from "./smallcheque.style";

const SmallCheque = ({ title, amount, description, from, to }) => {
  return (
    <View style={styles.smallCheque}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>{amount}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.from}>From: {from}</Text>
      <Text style={styles.to}>To: {to}</Text>
    </View>
  );
};

export { SmallCheque };
