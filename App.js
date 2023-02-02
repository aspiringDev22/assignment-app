import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import Series from "./screens/Series";
import { useFonts } from "expo-font";
import AllEpisodes from "./screens/AllEpisodes";
import Navbar from "./screens/Navbar";

export default function App() {
	const Stack = createNativeStackNavigator();
	let [fontsLoaded] = useFonts({
		Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
		MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
	});
	if (!fontsLoaded) {
		return;
	}
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Series" component={Series} />
					<Stack.Screen name="AllEpisodes" component={AllEpisodes} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({});
