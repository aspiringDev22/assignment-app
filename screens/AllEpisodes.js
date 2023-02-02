import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	Image,
	Button,
	ScrollView,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import Navbar from "./Navbar";
import Player from "./Player";

const AllEpisodes = ({ navigation }) => {
	const Tracks = [
		{
			id: 0,
			track: require("../assets/audio/music.mp3"),
		},
	];

	const [songPlayStatus, setSongPlayStatus] = React.useState(false);
	const [Loaded, SetLoaded] = React.useState(false);
	const [Loading, SetLoading] = React.useState(false);
	const [CurrentSong, SetCurrentSong] = React.useState(Tracks[0]);
	const sound = React.useRef(new Audio.Sound());

	React.useEffect(() => {
		LoadAudio();

		return () => Unload();
	}, [CurrentSong]);

	const Unload = async () => {
		await sound.current.unloadAsync();
	};

	const PlayAudio = async () => {
		try {
			const result = await sound.current.getStatusAsync();
			if (result.isLoaded) {
				if (result.isPlaying === false) {
					setSongPlayStatus(true);
					sound.current.playAsync();
					console.log("Song played");
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	const PauseAudio = async () => {
		try {
			const result = await sound.current.getStatusAsync();
			if (result.isLoaded) {
				if (result.isPlaying === true) {
					setSongPlayStatus(false);
					console.log("Song paused");
					sound.current.pauseAsync();
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	const LoadAudio = async () => {
		SetLoaded(false);
		SetLoading(true);
		const checkLoading = await sound.current.getStatusAsync();
		if (checkLoading.isLoaded === false) {
			try {
				const result = await sound.current.loadAsync(
					CurrentSong.track,
					{},
					true
				);
				if (result.isLoaded === false) {
					SetLoading(false);
					console.log("Error in Loading Audio");
				} else {
					SetLoading(false);
				}
			} catch (error) {
				console.log(error);
				SetLoading(false);
			}
		} else {
			SetLoading(false);
		}
	};

	return (
		<>
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<MaterialIcons
						onPress={() => navigation.navigate("Series")}
						name="arrow-back"
						size={30}
						color="white"
						style={{ paddingLeft: 20 }}
					/>
					<Text style={{ ...styles.textsHeading, fontSize: 18 }}>Re:Align</Text>
				</View>
				<View style={styles.scrollCard}>
					<Text style={styles.textsHeading}>All Episodes</Text>
					<ScrollView style={{ height: 800 }}>
						<View style={styles.cardItem}>
							<View style={styles.iconheading}>
								<Image
									style={styles.img}
									source={require("../assets/imgs/img1.png")}
								/>
								<Text style={styles.seriesTitle}>Re:Align Episode 1</Text>
							</View>
							<Text style={styles.seriesDesc}>
								Lorem ipsum dolor sit amet consectetur. Maecenas non vitae
								sagittis senectus eget ipsum sit purus ut.
							</Text>
							<Text style={styles.seriesDesc}>01 Jan 2020 ◦ 20 mins</Text>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									paddingBottom: 10,
								}}
							>
								{songPlayStatus ? (
									<>
										<TouchableOpacity onPress={PauseAudio}>
											<MaterialIcons
												style={styles.playPause}
												name="pause-circle-filled"
												size={35}
												color="white"
											/>
										</TouchableOpacity>
										<Text style={styles.seriesTitle}>Pause</Text>
									</>
								) : (
									<>
										<TouchableOpacity onPress={PlayAudio}>
											<MaterialIcons
												style={styles.playPause}
												name="play-circle-fill"
												size={35}
												color="white"
											/>
										</TouchableOpacity>
										<Text style={styles.seriesTitle}>Play</Text>
									</>
								)}
							</View>
						</View>

						<View style={styles.cardItem}>
							<View style={styles.iconheading}>
								<Image
									style={styles.img}
									source={require("../assets/imgs/img1.png")}
								/>
								<Text style={styles.seriesTitle}>Re:Align Episode 2</Text>
							</View>
							<Text style={styles.seriesDesc}>
								Lorem ipsum dolor sit amet consectetur. Maecenas non vitae
								sagittis senectus eget ipsum sit purus ut.
							</Text>
							<Text style={styles.seriesDesc}>01 Jan 2020 ◦ 20 mins</Text>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									paddingBottom: 10,
								}}
							>
								<TouchableOpacity onPress={PlayAudio}>
									<MaterialIcons
										style={styles.playPause}
										name="play-circle-fill"
										size={35}
										color="white"
									/>
								</TouchableOpacity>
								<Text style={styles.seriesTitle}>Play</Text>
							</View>
						</View>

						<View style={styles.cardItem}>
							<View style={styles.iconheading}>
								<Image
									style={styles.img}
									source={require("../assets/imgs/img1.png")}
								/>
								<Text style={styles.seriesTitle}>Re:Align Episode 3</Text>
							</View>
							<Text style={styles.seriesDesc}>
								Lorem ipsum dolor sit amet consectetur. Maecenas non vitae
								sagittis senectus eget ipsum sit purus ut.
							</Text>
							<Text style={styles.seriesDesc}>01 Jan 2020 ◦ 20 mins</Text>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									paddingBottom: 10,
								}}
							>
								<TouchableOpacity onPress={PauseAudio}>
									<MaterialIcons
										style={styles.playPause}
										name="play-circle-fill"
										size={35}
										color="white"
									/>
								</TouchableOpacity>
								<Text style={styles.seriesTitle}>Play</Text>
							</View>
						</View>

						<View style={styles.cardItem}>
							<View style={styles.iconheading}>
								<Image
									style={styles.img}
									source={require("../assets/imgs/img1.png")}
								/>
								<Text style={styles.seriesTitle}>Re:Align Episode 4</Text>
							</View>
							<Text style={styles.seriesDesc}>
								Lorem ipsum dolor sit amet consectetur. Maecenas non vitae
								sagittis senectus eget ipsum sit purus ut.
							</Text>
							<Text style={styles.seriesDesc}>01 Jan 2020 ◦ 20 mins</Text>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									paddingBottom: 10,
								}}
							>
								<TouchableOpacity onPress={PlayAudio}>
									<MaterialIcons
										style={styles.playPause}
										name="play-circle-fill"
										size={35}
										color="white"
									/>
								</TouchableOpacity>
								<Text style={styles.seriesTitle}>Play</Text>
							</View>
						</View>
						<View style={styles.cardItem}>
							<View style={styles.iconheading}>
								<Image
									style={styles.img}
									source={require("../assets/imgs/img1.png")}
								/>
								<Text style={styles.seriesTitle}>Re:Align Episode 5</Text>
							</View>
							<Text style={styles.seriesDesc}>
								Lorem ipsum dolor sit amet consectetur. Maecenas non vitae
								sagittis senectus eget ipsum sit purus ut.
							</Text>
							<Text style={styles.seriesDesc}>01 Jan 2020 ◦ 20 mins</Text>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									paddingBottom: 10,
								}}
							>
								<TouchableOpacity onPress={PlayAudio}>
									<MaterialIcons
										style={styles.playPause}
										name="play-circle-fill"
										size={35}
										color="white"
									/>
								</TouchableOpacity>
								<Text style={styles.seriesTitle}>Play</Text>
							</View>
						</View>
						<View style={styles.cardItem}>
							<View style={styles.iconheading}>
								<Image
									style={styles.img}
									source={require("../assets/imgs/img1.png")}
								/>
								<Text style={styles.seriesTitle}>Re:Align Episode 6</Text>
							</View>
							<Text style={styles.seriesDesc}>
								Lorem ipsum dolor sit amet consectetur. Maecenas non vitae
								sagittis senectus eget ipsum sit purus ut.
							</Text>
							<Text style={styles.seriesDesc}>01 Jan 2020 ◦ 20 mins</Text>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									paddingBottom: 10,
								}}
							>
								<TouchableOpacity onPress={PlayAudio}>
									<MaterialIcons
										style={styles.playPause}
										name="play-circle-fill"
										size={35}
										color="white"
									/>
								</TouchableOpacity>
								<Text style={styles.seriesTitle}>Play</Text>
							</View>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
			<Player songPlayStatus={songPlayStatus} />
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
	seriesTitle: {
		color: "#fff",
		fontSize: 18,
		padding: 10,
		fontFamily: "MontserratBold",
	},
	seriesDesc: {
		color: "#fff",
		fontSize: 12,
		padding: 10,
		paddingLeft: 30,
		fontFamily: "Montserrat",
	},
	img: {
		height: 50,
		width: 50,
	},
	scrollCard: {
		paddingTop: 20,
		backgroundColor: "#0f0f0f",
		borderRadius: 20,
	},
	cardItem: {
		// backgroundColor: "coral",
		margin: 15,
		borderBottomColor: "white",
		borderBottomWidth: 1,
		borderStyle: "solid",
	},
	iconheading: {
		alignItems: "center",
		paddingLeft: 30,
		display: "flex",
		flexDirection: "row",
		paddingBottom: 5,
	},
	playPause: {
		paddingLeft: 30,
	},
});
export default AllEpisodes;
