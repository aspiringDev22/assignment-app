import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { width } from "@mui/system";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const Navbar = () => {
	return (
		<LinearGradient
			colors={["transparent", "black"]}
			start={{ x: 0, y: 0 }}
			end={{ x: 0, y: 0.5 }}
			style={styles.navbar}
		>
			<View style={styles.navItem}>
				<Image
					style={styles.navImg}
					source={require("../assets/imgs/firstNav.png")}
				/>
				<Text style={styles.navText}>Home</Text>
			</View>
			<View style={styles.navItem}>
				<Image
					style={styles.navImg}
					source={require("../assets/imgs/secondNav.png")}
				/>
				<Text style={styles.navText}>Explore</Text>
			</View>
			<View style={styles.navItem}>
				<Image
					style={styles.navImg}
					source={require("../assets/imgs/thirdNav.png")}
				/>
				<Text style={styles.navText}>Sermons</Text>
			</View>
			<View style={styles.navItem}>
				<Image
					style={styles.navImg}
					source={require("../assets/imgs/fourthNav.png")}
				/>
				<Text style={styles.navText}>Profile</Text>
			</View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	navbar: {
		display: "flex",
		flexDirection: "row",
		height: 100,
		width: windowWidth,
		position: "fixed",
		zIndex: 1000,
		padding: 20,
		justifyContent: "space-between",
		backgroundColor: "transparent",
	},
	navItem: {
		// justifyContent: "center",
		alignItems: "center",
	},
	navImg: {
		height: 20,
		width: 20,
	},
	navText: {
		color: "#fff",
		fontSize: 12,
		paddingTop: 15,
		fontFamily: "Montserrat",
	},
});

export default Navbar;
