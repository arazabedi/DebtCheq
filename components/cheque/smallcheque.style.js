import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
  },
	smallCheque: {
    backgroundColor: "#ffdab9",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
		flexDirection:"row",
		justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    fontStyle: "italic",
  },
  from: {
    marginTop: 5,
  },
  to: {
    marginTop: 5,
  },
});


export default styles
