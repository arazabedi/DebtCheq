import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	welcomeTxt : (color) => ({
		fontFamily: "regular",
		fontSize: SIZES.xxlarge,
		marginTop: SIZES.xSmall,
		color: color
	})
});

export default styles
