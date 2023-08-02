import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  title: {
    fontFamily: "regular",
    fontSize: 30,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  netReceivables: {
    backgroundColor: "#90ee90",
    borderRadius: 30,
    padding: 10,
    marginTop: 15,
    alignItems: "center",
  },
  netReceivablesText: {
    fontFamily: "regular",
    fontSize: 20,
  },
});

export default styles;
