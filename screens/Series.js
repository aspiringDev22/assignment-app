import {
	Text,
	StyleSheet,
	View,
	SafeAreaView,
	Button,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Navbar from "./Navbar";

const Series = ({ navigation }) => {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<MaterialIcons
						onPress={() => navigation.navigate("Home")}
						name="arrow-back"
						size={30}
						color="white"
						style={{ paddingLeft: 20 }}
					/>
					<Text style={{ ...styles.textsHeading, fontSize: 18 }}>
						Our Series
					</Text>
				</View>
				<View style={styles.scrollCard}>
					<Text style={styles.textsHeading}>Choose any series to listen</Text>
					<ScrollView>
						<View style={styles.seriesList}>
							<TouchableOpacity
								onPress={() => navigation.navigate("AllEpisodes")}
								style={styles.seriesListItem}
							>
								<Image
									style={styles.image}
									source={require("../assets/imgs/img1.png")}
								/>
								<Text
									style={{ ...styles.texts, fontSize: 14, textAlign: "center" }}
								>
									Podcast Name can be 2 lines long
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => navigation.navigate("AllEpisodes")}
								style={styles.seriesListItem}
							>
								<Image
									style={styles.image}
									source={require("../assets/imgs/img2.png")}
								/>
								<Text
									style={{ ...styles.texts, fontSize: 14, textAlign: "center" }}
								>
									Podcast Name can be 2 lines long
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => navigation.navigate("AllEpisodes")}
								style={styles.seriesListItem}
							>
								<Image
									style={styles.image}
									source={require("../assets/imgs/img5.png")}
								/>
								<Text
									style={{ ...styles.texts, fontSize: 14, textAlign: "center" }}
								>
									Podcast Name can be 2 lines long
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => navigation.navigate("AllEpisodes")}
								style={styles.seriesListItem}
							>
								<Image
									style={styles.image}
									source={require("../assets/imgs/img6.png")}
								/>
								<Text
									style={{ ...styles.texts, fontSize: 14, textAlign: "center" }}
								>
									Podcast Name can be 2 lines long
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => navigation.navigate("AllEpisodes")}
								style={styles.seriesListItem}
							>
								<Image
									style={styles.image}
									source={require("../assets/imgs/img4.png")}
								/>
								<Text
									style={{ ...styles.texts, fontSize: 14, textAlign: "center" }}
								>
									Podcast Name can be 2 lines long
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => navigation.navigate("AllEpisodes")}
								style={styles.seriesListItem}
							>
								<Image
									style={styles.image}
									source={require("../assets/imgs/img2.png")}
								/>
								<Text
									style={{ ...styles.texts, fontSize: 14, textAlign: "center" }}
								>
									Podcast Name can be 2 lines long
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => navigation.navigate("AllEpisodes")}
								style={styles.seriesListItem}
							>
								<Image
									style={styles.image}
									source={require("../assets/imgs/img1.png")}
								/>
								<Text
									style={{ ...styles.texts, fontSize: 14, textAlign: "center" }}
								>
									Podcast Name can be 2 lines long
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => navigation.navigate("AllEpisodes")}
								style={styles.seriesListItem}
							>
								<Image
									style={styles.image}
									source={require("../assets/imgs/img2.png")}
								/>
								<Text
									style={{ ...styles.texts, fontSize: 14, textAlign: "center" }}
								>
									Podcast Name can be 2 lines long
								</Text>
							</TouchableOpacity>
						</View>
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

		fontFamily: "Montserrat",
	},
	textsHeading: {
		color: "#fff",
		fontSize: 16,
		padding: 10,
		fontFamily: "MontserratBold",
		fontWeight: "bold",
		paddingLeft: 30,
	},
	scrollCard: {
		paddingTop: 20,
		backgroundColor: "#0f0f0f",
		borderRadius: 20,
		height: 2000,
	},
	seriesList: {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	seriesListItem: {
		height: 220,
		width: 170,
		margin: 10,
	},
	image: {
		borderRadius: 14,
	},
});

export default Series;
