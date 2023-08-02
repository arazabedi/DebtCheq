import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import UseFetch from "../../hook/useFetch";
import { COLORS, SIZES } from "../../constants";
import { SmallCheque } from "./SmallCheque";

const ChequeList = () => {
  const { data, isLoading, error } = UseFetch();

  if (isLoading) {
    return <ActivityIndicator size={SIZES.large} color={COLORS.primary} />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (!data || data.length === 0) {
    return <Text>No cheques available.</Text>;
  }

  return (
    <View>
      {data.map((cheque) => (
        <SmallCheque
          key={cheque._id}
          title={cheque.title}
          amount={cheque.amount}
          description={cheque.description}
          from={cheque.from}
          to={cheque.to}
        />
      ))}
    </View>
  );
};

export {ChequeList};
