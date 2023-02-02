import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import Navbar from "./Navbar";

const HomeScreen = ({ navigation }) => {
	let [fontsLoaded] = useFonts({
		Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
		MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
	});
	if (!fontsLoaded) {
		return;
	}
	return (
		<>
			<SafeAreaView style={styles.container}>
				<StatusBar style="auto" />
				<View style={styles.header}>
					<Text style={{ ...styles.textsHeading, fontSize: 18 }}>
						Select Your Category
					</Text>
				</View>
				<View style={styles.scrollCard}>
					<Text style={styles.textsHeading}>Choose any category to listen</Text>
					<ScrollView>
						<TouchableOpacity onPress={() => navigation.navigate("Series")}>
							<LinearGradient
								colors={["#FF003DD1", "#4E0009"]}
								start={{ x: 0, y: 0.5 }}
								end={{ x: 1, y: 0.5 }}
								style={styles.card}
							>
								<Text style={{ ...styles.textsHeading, paddingLeft: 30 }}>
									English
								</Text>
								<Text
									style={{
										...styles.texts,
										fontFamily: "Montserrat",
										marginRight: 170,
									}}
								>
									The collection of all the English sermons from TKT Church
								</Text>
								<MaterialCommunityIcons
									style={styles.icon}
									name="arrow-right-circle"
									size={30}
									color="white"
								/>
								<Image
									style={styles.imgRotate}
									source={require("../assets/imgs/img2.png")}
								/>
								<Image
									style={styles.imgRotate2}
									source={require("../assets/imgs/img1.png")}
								/>
								<Image
									style={styles.grid}
									source={require("../assets/imgs/grid.png")}
								/>
							</LinearGradient>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate("Series")}>
						<LinearGradient
							colors={["#FF4D00", "#520A00"]}
							start={{ x: 0, y: 0.5 }}
							end={{ x: 1, y: 0.5 }}
							style={styles.card}
							onPress={() => navigation.navigate("Series")}
						>
							<Text style={{ ...styles.textsHeading, paddingLeft: 30 }}>
								Bi-lingual
							</Text>
							<Text
								style={{
									...styles.texts,
									fontFamily: "Montserrat",
									marginRight: 220,
								}}
							>
								The collection of all the Bi-lingual sermons from TKT Church
							</Text>
							<MaterialCommunityIcons
								style={styles.icon}
								name="arrow-right-circle"
								size={30}
								color="white"
							/>
							<Image
								style={styles.imgRotate}
								source={require("../assets/imgs/img1.png")}
							/>
							<Image
								style={styles.imgRotate2}
								source={require("../assets/imgs/img2.png")}
							/>
							<Image
								style={styles.grid}
								source={require("../assets/imgs/grid.png")}
							/>
						</LinearGradient>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate("Series")}>
						<LinearGradient
							colors={["#0047FF", "#000470"]}
							start={{ x: 0, y: 0.5 }}
							end={{ x: 1, y: 0.5 }}
							style={styles.card}
							onPress={() => navigation.navigate("Series")}
						>
							<Text style={{ ...styles.textsHeading, paddingLeft: 30 }}>
								Telugu
							</Text>
							<Text
								style={{
									...styles.texts,
									fontFamily: "Montserrat",
									marginRight: 150,
								}}
							>
								The collection of all the Telugu sermons from TKT Church
							</Text>
							<MaterialCommunityIcons
								style={styles.icon}
								name="arrow-right-circle"
								size={30}
								color="white"
							/>
							<Image
								style={styles.imgRotate}
								source={require("../assets/imgs/img2.png")}
							/>
							<Image
								style={styles.imgRotate2}
								source={require("../assets/imgs/img4.png")}
							/>
							<Image
								style={styles.grid}
								source={require("../assets/imgs/grid.png")}
							/>
						</LinearGradient>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate("Series")}>
						<LinearGradient
							colors={["#00C543", "#005212"]}
							start={{ x: 0, y: 0.5 }}
							end={{ x: 1, y: 0.5 }}
							style={styles.card}
							onPress={() => navigation.navigate("Series")}
						>
							<Text style={{ ...styles.textsHeading, paddingLeft: 30 }}>
								Songs
							</Text>
							<Text
								style={{
									...styles.texts,
									fontFamily: "Montserrat",
									marginRight: 190,
								}}
							>
								The collection of all the Songs from TKT Church
							</Text>
							<MaterialCommunityIcons
								style={styles.icon}
								name="arrow-right-circle"
								size={30}
								color="white"
							/>
							<Image
								style={styles.imgRotate}
								source={require("../assets/imgs/img2.png")}
							/>
							<Image
								style={styles.imgRotate2}
								source={require("../assets/imgs/img2.png")}
							/>
							<Image
								style={styles.grid}
								source={require("../assets/imgs/grid.png")}
							/>
						</LinearGradient>
						</TouchableOpacity>
					</ScrollView>
				</View>
			</SafeAreaView>
			<Navbar />
		</>
	);
};

const styles = StyleSheet.create({
	header: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	container: {
		flex: 1,
		backgroundColor: "#000",
		color: "#fff",
	},
	texts: {
		color: "#fff",
		fontSize: 12,
		paddingLeft: 30,
		fontFamily: "Montserrat",
		fontWeight: "bold",
	},
	textsHeading: {
		color: "#fff",
		fontSize: 16,
		padding: 10,
		paddingLeft: 30,
		fontFamily: "MontserratBold",
		fontWeight: "bold",
	},
	grid: {
		position: "absolute",
		right: 0,
		width: "100%",
	},
	card: {
		display:'flex',
		justifyContent:'center',
		paddingTop:5,
		overflow: "hidden",
		height: 185,
		borderRadius: 10,
		margin: 10,
	},
	scrollCard: {
		paddingTop: 20,
		backgroundColor: "#0f0f0f",
		borderRadius: 40,
	},
	icon: {
		padding: 5,
		paddingLeft: 30,
	},
	imgRotate: {
		borderColor: "white",
		borderWidth: 4,
		borderStyle: "solid",
		borderRadius: 10,
		position: "absolute",
		top: 60,
		left: 220,
		height: 134,
		transform: [{ rotate: "45deg" }],
	},
	imgRotate2: {
		borderColor: "white",
		borderWidth: 4,
		borderStyle: "solid",
		borderRadius: 10,
		position: "absolute",
		top: 60,
		left: 220,
		height: 134,
		transform: [{ rotate: "30deg" }],
	},
});

export default HomeScreen;
