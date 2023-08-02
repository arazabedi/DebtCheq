import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Welcome, SmallCheque, Cheque, ChequeList } from "../components";
import UseFetch from "../hook/useFetch";

const Home = () => {
  const { data, isLoading, error } = UseFetch();
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Text style={styles.title}>Open Cheques</Text>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={40} style={styles.compose} />
          </TouchableOpacity>
        </View>
        <View style={styles.netReceivables}>
          <Text style={styles.netReceivablesText}>£30</Text>
          <Text style={{ fontSize: 10 }}>Net Recievables</Text>
        </View>
      </View>
      <ScrollView>
        <View style={{ marginTop: 15 }}>
					<ChequeList />
        </View>
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  );
};

export { Home };
