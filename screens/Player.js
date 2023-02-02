import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const Player = ({ songPlayStatus }) => {
	return (
		<View style={styles.player}>
			<View style={styles.title}>
				<Image
					style={{ height: 50, width: 50 }}
					source={require("../assets/imgs/img2.png")}
				/>
				<Text style={styles.textTitle}>ReALign Epi...</Text>
			</View>
			<View style={styles.mediaControls}>
				<MaterialIcons name="skip-previous" size={40} color="white" />
				{songPlayStatus ? (
					<MaterialIcons name="pause-circle-filled" size={40} color="white" />
				) : (
					<MaterialIcons name="play-circle-fill" size={40} color="white" />
				)}
				<MaterialIcons name="skip-next" size={40} color="white" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	player: {
		width: windowWidth,
		height: 80,
		backgroundColor: "#232323",
		margin: 10,
		borderRadius: 5,
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	title: {
		padding: 10,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	textTitle: {
		color: "#fff",
		fontSize: 14,
		padding: 5,
		fontFamily: "MontserratBold",
	},
	mediaControls: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingRight: 30,
	},
});

export default Player;
