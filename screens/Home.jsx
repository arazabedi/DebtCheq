import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
			<Text>Net Receivables</Text>
			
        <View style={styles.appBar}>
          <Text>Unsettled Cheques</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}> 8 </Text>
            </View>
            <Fontisto name="shopping-bag" size={24}/>
          </View>
        </View>
        <Text>Send a cheque</Text>
        <Ionicons name="create-outline" size={40} />
      </View>
    </SafeAreaView>
  );
};

export { Home };
